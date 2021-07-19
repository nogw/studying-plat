import mongoose, { Document, Schema } from 'mongoose'

export interface IArrayChallenges extends Document {
  idChallenge: string,
  completedAt: string
}

export interface ISchemaUser extends Document {
  _id: string,
  name: string,
  email: string,
  password: string,
  completedChallenges: Array<IArrayChallenges>
};

const completedChallengesSchema = new Schema<IArrayChallenges>(
  {
    idChallenge: {
      type: String
    },
    completedAt: {
      type: String
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
    completedChallenges: [completedChallengesSchema]
  }
)

export default mongoose.model("User", userSchema)