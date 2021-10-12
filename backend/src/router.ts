import express from 'express'

import challengeAdminController from './controllers/challenge.admin.controller'
import challengeUserController from './controllers/challenge.user.controller'
import userController from './controllers/user.controller'

const router = express.Router()

router.route("/user/register")
  .post(userController.userRegister)

router.route("/user/login")
  .post(userController.userLogin)

router.route("/challenge/admin/create")
  .post(challengeAdminController.createChallenge)

router.route("/challenge/admin/list")
  .get(challengeAdminController.listChallenges)
  
router.route("/challenge/admin/set")
  .post(challengeAdminController.setChallenge)

router.route("/challenge/admin/challengestoapprove")
  .get(challengeAdminController.listChallengesToApprove)

router.route("/challenge/admin/get/:slug")
  .get(challengeAdminController.getChallenge)

router.route("/challenge/user/start")
.post(challengeUserController.startChallenge)

router.route("/challenge/user/leave")
  .post(challengeUserController.leaveChallenge)

router.route("/challenge/user/send")
  .post(challengeUserController.sendChallengeSolve)

router.route("/challenge/user/challenges/list/:slug")
  .get(challengeUserController.userAvailableChallenges)

router.route("/challenge/user/challenges/:slug")
  .get(challengeUserController.userCompletedOrInProgressChallenges)

router.route("/challenge/user/challenge/:userId/:challengeId")
  .get(challengeUserController.userGetChallenge)


export default router