import express from 'express'

import challengeAdminController from './controllers/challenge.admin.controller'
import challengeUserController from './controllers/challenge.user.controller'
import userController from './controllers/user.controller'
import token_validator from './middlewares/token.required.middleware'
import { isAdmin } from './middlewares/verify.middleware'

const router = express.Router()

router.route("/user/register")
  .post(userController.userRegister)

router.route("/user/login")
  .post(userController.userLogin)

router.route("/user/info/:slug")
  .all(token_validator)
  .get(userController.userInfo)

router.route("/challenge/admin/create")
  .all(token_validator)
  .all(isAdmin)
  .post(challengeAdminController.createChallenge)

router.route("/challenge/admin/challengestoapprove")
  .all(token_validator)
  .all(isAdmin)
  .get(challengeAdminController.listChallengesToApprove)

router.route("/challenge/admin/set")
  .all(token_validator)
  .all(isAdmin)
  .post(challengeAdminController.setChallenge)

router.route("/challenge/admin/list")
  .all(token_validator)
  .get(challengeAdminController.listChallenges)

router.route("/challenge/admin/get/:slug")
  .all(token_validator)
  .get(challengeAdminController.getChallenge)

router.route("/challenge/user/start")
  .all(token_validator)
  .post(challengeUserController.startChallenge)

router.route("/challenge/user/leave")
  .all(token_validator)
  .post(challengeUserController.leaveChallenge)

router.route("/challenge/user/send")
  .all(token_validator)
  .post(challengeUserController.sendChallengeSolve)

router.route("/challenge/user/challenges/list/:slug")
  .all(token_validator)
  .get(challengeUserController.userAvailableChallenges)

router.route("/challenge/user/challenges/:slug")
  .all(token_validator)
  .get(challengeUserController.userCompletedOrInProgressChallenges)

router.route("/challenge/user/challenge/:userId/:challengeId")
  .all(token_validator)
  .get(challengeUserController.userGetChallenge)

export default router