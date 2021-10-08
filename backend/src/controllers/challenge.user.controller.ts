import dayjs from 'dayjs'
import { Request, Response } from 'express'

import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import User from '../models/user.model'
import userModel, { ISchemaUser } from '../models/user.model'

const sendChallengeSolve = async (req: Request, res: Response) => {
  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  
  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  } 
  
  try {
    const challenge = new challengeUserModel({
      challengeId: req.body.challengeId,
      userId: req.body.userId,
      solution: req.body.solution,
      time: req.body.time,
      approved: "await" 
    })
    
    challenge.save()
    .catch((error: string | object) => {
      return res.status(400).json({
        error: error
      })
    })

    // User.findOneAndUpdate(
    //   { _id: req.body.userId },
    //   { $push: { 
    //       completedChallenges: { idChallenge: req.body.challengeId, completedAt: req.body.time }, 
    //       approved: "await" 
    //     }
    //   },
    //   { upsert: true },
    //   (error: any, doc: any) => {
    //     if (error) {
    //       return res.status(400).json({
    //         error: error
    //       })
    //     } else {
    //       console.log(doc);
    //     }
    //   }
    // )
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const startChallenge = async (req: Request, res: Response) => {
  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()

  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found"
    })
  }

  const updt = await userModel.findOneAndUpdate(
    { _id: req.body.userId },
    { $push: { inProgressChallenges: { 
      idChallenge: req.body.challengeId, 
      startedAt: dayjs()
    }}}
  )

  console.log(updt)
  
  return res.status(200).json({
    message: "update"
  })
}

const completedChallenges = async (req: Request, res: Response) => {
  const completedUserChallenges = await challengeUserModel.findById( req.body.userId ).exec()

  if (!completedUserChallenges) {
    return res.status(404).json({
      error: "No challenges completed"
    })
  }

  return res.status(200).json({
    message: completedUserChallenges
  })
} 

export default {
  sendChallengeSolve,
  startChallenge,
  completedChallenges
}