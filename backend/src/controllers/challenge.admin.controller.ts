import { Request, Response } from 'express'
import ChallengeAdmin, { ISchemaChallengeAdmin } from '../models/challenge.admin.model'

const isAdmin = (req: Request) => {
  return req.body.token_payload.permission === "admin"
}

const createChallenge = (req: Request, res: Response) => {
  if (!isAdmin(req)) {
    return res.status(403).json({
      error: "You need to be an administrator to create challenges"
    })
  }
  
  try {
    const challenge = new ChallengeAdmin({
      title: req.body.title,
      description: req.body.description,
      challenge: req.body.challenge,
      difficulty: req.body.difficulty,
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
  // if (!isAdmin(req)) {
  //   return res.status(403).json({
  //     error: "You need to be an administrator to list challenges"
  //   })
  // }

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

const getChallenge = async (req: Request, res: Response) => {
  try {
    const ExistChallenge = await ChallengeAdmin.findOne(req.body.challengeId).exec()
    if (!ExistChallenge) {
      return res.status(404).json({
        error: "No challenge created."
      })
    }
    return res.status(200).json({
      message: ExistChallenge
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  createChallenge,
  listChallenges,
  getChallenge
}