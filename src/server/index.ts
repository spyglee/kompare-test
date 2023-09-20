import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express, {
    Express,
    Request,
    Response
  } from 'express'

dotenv.config();

const app: Express = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO || '')
const db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('open', () => console.log('Connected to database'))

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  console.log(req)
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})