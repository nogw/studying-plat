import mongoose, { Document, Schema } from 'mongoose'

export interface ISchemaChallengeUser extends Document {
  _id: string,
  challengeId: string,
  userId: string,
  solution: string,
  time: string,
  approved: boolean | string
};

const challengeUserSchema = new Schema<ISchemaChallengeUser>(
  {
    challengeId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    approved: {
      type: Schema.Types.Mixed
    }
  }
)

export default mongoose.model("ChallengeUser", challengeUserSchema)