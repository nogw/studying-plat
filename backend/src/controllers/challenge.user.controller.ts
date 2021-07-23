import { Request, Response } from 'express'

import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import User from '../models/user.model'
import { ISchemaUser } from '../models/user.model'

const setChallenge = async (req: Request, res: Response) => {
  if (!req.body.set) {
    return res.status(400).json({
      error: "Send status challenge"
    })
  }

  // TODO: check if the upload is done by the logged in user

  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  } else {
    const objCompletedChallenges = { idChallenge: req.body.challengeId }
    User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { completedChallenges: objCompletedChallenges, approved: "dropped" } },
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
}

const sendChallengeSolve = async (req: Request, res: Response) => {
  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  } else {
    const objCompletedChallenges = { idChallenge: req.body.challengeId, completedAt: req.body.time }
    User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { completedChallenges: objCompletedChallenges, approved: "await" } },
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
  try {
    const challenge = new challengeUserModel({
      challengeId: req.body.challengeId,
      userId: req.body.userId,
      solution: req.body.solution,
      time: req.body.time
    })
    challenge.save()
    .then(() => {
      return res.status(200).json({
        message: "Solution sent"
      })
    })
    .catch((error: string | object) => {
      return res.status(400).json({
        error: error
      })
    })
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