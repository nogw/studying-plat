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
      required: true
    },
    description: {
      type: String,
      required: true
    },
    challenge: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    limit: {
      type: String,
      required: true
    },
  }
)

export default mongoose.model("ChallengeAdmin", challengeAdminSchema)