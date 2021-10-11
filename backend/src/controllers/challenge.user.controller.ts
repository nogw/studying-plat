import dayjs from 'dayjs'
import { Request, Response } from 'express'

import challengeAdminModel from '../models/challenge.admin.model'
import challengeUserModel from '../models/challenge.user.model'
import User from '../models/user.model'
import userModel, { ISchemaUser } from '../models/user.model'

const sendChallengeSolve = async (req: Request, res: Response) => {
  const userExists = await User.exists({ _id: req.body.userId })
  const challengeExists = await challengeAdminModel.exists({ _id: req.body.challengeId })
  const userSendThisChallenge = await challengeUserModel.findOne({ challengeId: req.body.challengeId, userId: req.body.userId, })

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

  if (userSendThisChallenge) {
    return res.status(400).json({
      error: "Challenge already send"
    })
  }

  try {
    const challenge = new challengeUserModel({
      challengeId: req.body.challengeId,
      userId: req.body.userId,
      solution: req.body.solution,
      time: dayjs(),
      approved: "await"
    })
  
    await challenge.save()

    await userModel.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { inProgressChallenges: { 
        _id: req.body.challengeId
      }}}
    )

    return res.status(200).json({
      message: challenge
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
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

const leaveChallenge = async (req: Request, res: Response) => {
  const challengeExists = await challengeAdminModel.find({ _id: req.body.challengeId }).exec()
  const userStartThisChallenge = await User.findOne({ _id: req.body.userId, "inProgressChallenges._id": req.body.challengeId })
  console.log(userStartThisChallenge)

  if (!challengeExists) {
    return res.status(404).json({
      error: "Challenge not found"
    })
  }

  if (!userStartThisChallenge) {
    return res.status(400).json({
      error: "Challenge not started"
    })
  }

  const updt = await userModel.findOneAndUpdate(
    { _id: req.body.userId },
    { $pull: { inProgressChallenges: { 
      _id: req.body.challengeId
    }}}
  )

  console.log(updt)
  
  return res.status(200).json({
    message: "rempve"
  })
}

const userAvailableChallenges = async (req: Request, res: Response) => {
  const UserId = req.params.slug
  const AvailableChallenges = await User.find({ _id: UserId }, { "completedChallenges.idChallenge": true, "inProgressChallenges.idChallenge": true }).exec()
  const ChallengesCompletedAndInProgress = [...AvailableChallenges[0].completedChallenges, ...AvailableChallenges[0].inProgressChallenges ]
  const AvailableChallengesIds = ChallengesCompletedAndInProgress.map((c: any) => c.idChallenge)
  const listExistingChallenges = await challengeAdminModel.find({'_id': { "$nin": AvailableChallengesIds }}).sort({ createdAt: 'desc'}).exec()
  console.log(!!listExistingChallenges)

  if (listExistingChallenges.length < 1) {
    return res.status(404).json({
      error: "No challenges available"
    })
  }

  return res.status(200).json({
    message: listExistingChallenges
  })
}

const userCompletedOrInProgressChallenges = async (req: Request, res: Response) => {
  const UserId = req.params.slug

  const completedOrInProgressUserChallenges = await User.find({ _id: UserId }, { "completedChallenges": true, "inProgressChallenges": true }).exec()

  if (!completedOrInProgressUserChallenges) {
    return res.status(404).json({
      error: "No challenges completed"
    })
  }

  return res.status(200).json({
    message: completedOrInProgressUserChallenges
  })
} 

const userGetChallenge = async (req: Request, res: Response) => {
  const UserId = req.params.userId
  const ChallengeId = req.params.challengeId

  console.log(UserId)
  console.log(ChallengeId)
  console.log("ChallengeId")

  const userSendThisChallenge = await challengeUserModel.findOne({ challengeId: ChallengeId, userId: UserId, })

  console.log(userSendThisChallenge)

  return res.status(200).json({
    message: userSendThisChallenge
  })
}

export default {
  sendChallengeSolve,
  startChallenge,
  leaveChallenge,
  userAvailableChallenges,
  userCompletedOrInProgressChallenges,
  userGetChallenge
}