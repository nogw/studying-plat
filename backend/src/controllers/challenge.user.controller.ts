import dayjs from 'dayjs'
import { Request, Response } from 'express'

import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import User from '../models/user.model'
import userModel, { ISchemaUser } from '../models/user.model'

const sendChallengeSolve = async (req: Request, res: Response) => {
  const userExists = await User.exists({ _id: req.body.userId })
  const challengeExists = await challengeAdminModel.exists({ _id: req.body.challengeId })
  const userStartThisChallenge = await challengeUserModel.findOne({ challengeId: req.body.challengeId, userId: req.body.userId, })

  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  }
  
  if (!userExists) {
    return res.status(404).json({
      error: "User not found."
    })
  }

  console.log(userStartThisChallenge)
  if (userStartThisChallenge) {
    return res.status(400).json({
      error: "Challenge already send"
    })
  }

  const challenge = await new challengeUserModel({
    challengeId: req.body.challengeId,
    userId: req.body.userId,
    solution: req.body.solution,
    time: req.body.time,
    approved: "in progress"
  })

  console.log(challenge)

  return res.status(200).json({
    message: "challenge"
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
}

const startChallenge = async (req: Request, res: Response) => {
  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  const userStartThisChallenge = await User.findOne({ _id: req.body.userId, "inProgressChallenges.idChallenge": req.body.challengeId })
  const userCompleteThisChallenge = await User.findOne({ _id: req.body.userId, "completedChallenges.idChallenge": req.body.challengeId })

  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found"
    })
  }

  console.log(userStartThisChallenge)
  if (userStartThisChallenge || userCompleteThisChallenge) {
    return res.status(400).json({
      error: "Challenge cannot be started"
    })
  }

  const updt = await userModel.findOneAndUpdate(
    { _id: req.body.userId },
    { $push: { inProgressChallenges: { 
      idChallenge: req.body.challengeId, 
      title: challengeExists[0].title,
      description: challengeExists[0].description,
      startedAt: dayjs()
    }}}
  )

  console.log(updt)
  
  return res.status(200).json({
    message: "update"
  })
}

const userChallenges = async (req: Request, res: Response) => {
  const slug = req.params.slug

  const completedOrInProgressUserChallenges = await User.find({ _id: slug }).select("completedChallenges, inProgressChallenges").exec()

  if (!completedOrInProgressUserChallenges) {
    return res.status(404).json({
      error: "No challenges completed"
    })
  }

  return res.status(200).json({
    message: completedOrInProgressUserChallenges
  })
} 

export default {
  sendChallengeSolve,
  startChallenge,
  userChallenges
}