import mongoose, { Document, Schema } from 'mongoose'

export interface ISchemaChallengeUser extends Document {
  _id: string,
  challengeId: string,
  userId: string,
  solution: string,
  time: string
};

const challengeUserSchema = new Schema<ISchemaChallengeUser>(
  {
    challengeId: {
      type: String,
    },
    userId: {
      type: String,
    },
    solution: {
      type: String,
    },
    time: {
      type: String,
    },
  }
)

export default mongoose.model("ChallengeUser", challengeUserSchema)