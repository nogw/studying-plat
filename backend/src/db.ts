import mongoose from 'mongoose'

const mgURI = process.env.MG_URI

const connect = () => {
  mongoose.connect(mgURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const k in collections) {
    const collection: any = collections[k]
    await collection.deleteMany();
  }
}

const drop = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
}

export default {
  connect,
  clear,
  drop
}