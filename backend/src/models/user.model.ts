import mongoose, { Document, Schema } from 'mongoose'

export interface IArrayChallenges extends Document {
  idChallenge: string,
  title: string,
  description: string,
  startedAt: string,
  completedAt: string
}

export interface ISchemaUser extends Document {
  _id: string,
  name: string,
  email: string,
  password: string,
  permission: string,
  completedChallenges: Array<IArrayChallenges>
  inProgressChallenges: Array<IArrayChallenges>
};

const ChallengesSchema = new Schema<IArrayChallenges>(
  {
    idChallenge: {
      type: String
    },
    title: {
      type: String,
    },
    description: {
      type: String
    },
    startedAt: {
      type: String
    },
    approved: {
      type: Schema.Types.Mixed,
      default: "in progress",
      required: false
    }
  }
)

const userSchema = new Schema<ISchemaUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    permission: {
      type: String,
      default: "user"
    },
    refreshToken: {
      type: String,
      required: false
    },
    completedChallenges: [ChallengesSchema],
    inProgressChallenges: [ChallengesSchema]
  }
)

export default mongoose.model("User", userSchema)