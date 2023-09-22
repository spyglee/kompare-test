import { Request, Response } from 'express'
// import { Connection } from 'mongoose'
import priceCalculator from '../handlers/placeCalculator.ts'

const calculate = (req: Request, res: Response) => {
  const result = priceCalculator(req.body)
  const response = JSON.stringify(result)
  res.end(response)
}

export default calculate