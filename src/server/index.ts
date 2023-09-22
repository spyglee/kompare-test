import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express,
  {
    Express,
    Request,
    Response
  }
from 'express'

import calculating from './controllers/calculatingControllers.ts'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO || '')
const db = mongoose.connection

db.on('error', (error) => {
  console.error(error)
})
db.once('open', () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())

app.post('/calculate', (req: Request, res: Response) => {
  return calculating(req, res)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})