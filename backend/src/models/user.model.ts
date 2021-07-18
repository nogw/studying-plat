import mongoose, { Document, Schema } from 'mongoose'

export interface ISchemaUser extends Document {
  _id: string,
  name: string,
  email: string,
  password: string
};

const userSchema = new Schema<ISchemaUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  }
)

export default mongoose.model("User", userSchema)