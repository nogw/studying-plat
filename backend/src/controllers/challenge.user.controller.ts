import { Request, Response } from 'express'

import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import User from '../models/user.model'
import { ISchemaUser } from '../models/user.model'

const setChallenge = async (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    return res.status(400).json({
      error: "Send status challenge"
    })
  }

  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  
  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  } 

  const updateStatusInModel = (status: string | boolean) => {
    User.findOneAndUpdate(
      { _id: req.body.userId, "completedChallenges.idChallenge": req.body.challengeId },
      { $set: { "completedChallenges.$.approved": status } },
      { upsert: true },
      (error: any, doc: any) => {
        if (error) {
          return res.status(400).json({
            error: error
          })
        } else {
          console.log(doc);
        }
      }
    )
  }

  // TODO: check if the upload is done by the logged in user, and check if user is admin

  switch (req.body.set) {
    case "drop":
      updateStatusInModel("dropped")
      break;

    case "approve":
      updateStatusInModel(true)
      break;

    case "reject":
      updateStatusInModel(false)
      break;
    
    default:
      return res.status(400).json({
        error: "need option to set"
      })
      break;
  }
  
}

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
      time: req.body.time
    })
    
    challenge.save()
    .catch((error: string | object) => {
      return res.status(400).json({
        error: error
      })
    })

    User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { 
          completedChallenges: { idChallenge: req.body.challengeId, completedAt: req.body.time }, 
          approved: "await" 
        }
      },
      { upsert: true },
      (error: any, doc: any) => {
        if (error) {
          return res.status(400).json({
            error: error
          })
        } else {
          console.log(doc);
        }
      }
    )
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  sendChallengeSolve,
  setChallenge
}