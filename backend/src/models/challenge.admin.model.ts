import mongoose, { Document, Schema } from 'mongoose'

export interface ISchemaChallengeAdmin extends Document {
  _id: string,
  challenge: string,
  points: number,
  limit: string
};

const challengeAdminSchema = new Schema<ISchemaChallengeAdmin>(
  {
    challenge: {
      type: String,
    },
    points: {
      type: Number,
    },
    limit: {
      type: String,
    },
  }
)

export default mongoose.model("ChallengeAdmin", challengeAdminSchema)