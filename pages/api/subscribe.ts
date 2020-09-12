import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDB: Db = null

const connectDB = async (uri: string) => {
  if (cachedDB) {
    return cachedDB
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1)
  const db = client.db(dbName)

  cachedDB = db

  return cachedDB
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body

  const db = await connectDB(process.env.MONGODB_URI)
  const collection = await db.collection('subscribers')

  await collection.insertOne({
    email,
    subscribedAt: new Date(),
  })

  return response.status(201).json({ message: `Thanks for you registry at newsletter: ${email}` })
}