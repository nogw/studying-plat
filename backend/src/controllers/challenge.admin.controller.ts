import { Request, Response } from 'express'
import ChallengeAdmin, { ISchemaChallengeAdmin } from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import userModel from '../models/user.model'

const isAdmin = (req: Request) => {
  return req.body.token_payload.permission === "admin"
}

const createChallenge = async (req: Request, res: Response) => {
  // if (!isAdmin(req)) {
  //   return res.status(403).json({
  //     error: "You need to be an administrator to create challenges"
  //   })
  // }
  
  try {
    const challenge = new ChallengeAdmin({
      title: req.body.title,
      description: req.body.description,
      challenge: req.body.challenge,
      difficulty: req.body.difficulty,
      points: req.body.points,
      limit: req.body.limit
    })

    await challenge.save()

    return res.status(200).json({
      message: challenge
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const listChallengesToApprove = async (req: Request, res: Response) => {
  try {
    const listExistingChallenges = await challengeUserModel.find({}).select({"_id": 1, "userId": 1, "challengeId": 1, "time": 1}).sort({ createdAt: 'desc'}).exec()
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

const getChallenge = async (req: Request, res: Response) => {
  const slug = req.params.slug

  try {
    const ExistChallenge = await ChallengeAdmin.findById(slug).exec()
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

const setChallenge = async (req: Request, res: Response) => {
  if (!req.body.set) {
    return res.status(400).json({
      error: "Send status challenge"
    })
  }

  const challengeExists = await ChallengeAdmin.find({ _id: req.body.challengeId }).exec()
  
  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found."
    })
  } 

  const updateStatusInModel = async (status: boolean) => {
    try {
      await challengeUserModel.findOneAndUpdate(
        { challengeId: req.body.challengeId, userId: req.body.userId, },
        { approved: status }
      )

      return res.status(200).json({
        message: "ok"
      })
    } catch (error) {
      return res.status(400).json({
        error: error
      })
    }
  }

  // TODO: check if the upload is done by the logged in user, and check if user is admin

  const inProgressChallenge = await userModel.findOne({ _id: req.body.userId, "inProgressChallenges._id": req.body.challengeId })

  switch (req.body.set) {
    case true:
      updateStatusInModel(true)
      
      await userModel.findOneAndUpdate(
        { _id: req.body.userId },
        { $pull: { inProgressChallenges: { 
          _id: req.body.challengeId
        }}}
      )

      await userModel.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { completedChallenges: { 
          idChallenge: req.body.challengeId, 
          title: challengeExists.title,
          description: challengeExists.description,
          startedAt: inProgressChallenge.startedAt,
        }}}
      )

      break;
    case false:
      updateStatusInModel(false)

      await userModel.findOneAndUpdate(
        { _id: req.body.userId, "inProgressChallenges.idChallenge": req.body.challengeId },
        { $set: {
          "inProgressChallenges.$.approved": false
        }}
      )

      await challengeUserModel.findOneAndUpdate(
        { _id: req.body.userId, "inProgressChallenges.challengeId": req.body.challengeId },
        { $set: {
          approved: false
        }}
      )

      break;
    default:
      return res.status(400).json({
        error: "Send a valid option"
      }); break;
  }
}

export default {
  createChallenge,
  listChallengesToApprove,
  listChallenges,
  getChallenge,
  setChallenge
}