import { Request, Response } from 'express'
import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'

// TODO: add completed challenge to user

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
  sendChallengeSolve
}