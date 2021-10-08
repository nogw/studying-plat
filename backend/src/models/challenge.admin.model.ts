import mongoose, { Document, Schema } from 'mongoose'

export interface ISchemaChallengeAdmin extends Document {
  _id: string,
  title: string,
  description: string,
  challenge: string,
  difficulty: string,
  points: number,
  limit: string
};

const challengeAdminSchema = new Schema<ISchemaChallengeAdmin>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    challenge: {
      type: String,
    },
    difficulty: {
      type: String
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