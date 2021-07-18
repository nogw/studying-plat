import mongoose from 'mongoose'

const mgURI = process.env.MG_URI

const connect = () => {
  mongoose.connect(mgURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

export default {
  connect
}