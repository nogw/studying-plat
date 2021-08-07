import { Request, Response } from 'express'
import ChallengeAdmin, { ISchemaChallengeAdmin } from '../models/challenge.admin.model'

const createChallenge = (req: Request, res: Response) => {
  if (req.body.token_payload.level !== "admin") {
    return res.status(403).json({
      error: "You need to be an administrator to create challenges"
    })
  }
  
  try {
    const challenge = new ChallengeAdmin({
      challenge: req.body.challenge,
      points: req.body.points,
      limit: req.body.limit
    })
    challenge.save()
    .then(() => {
      return res.status(201).json({
        message: "Challenge created"
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

const listChallenges = async (req: Request, res: Response) => {
  try {
    const listExistingChallenges = await ChallengeAdmin.find({}).sort({ createdAt: 'desc'}).exec()
    if (!listExistingChallenges) {
      return res.status(404).json({
        error: "No challenge created."
      })
    }
    return res.status(200).json({
      message: listExistingChallenges
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  createChallenge,
  listChallenges
}