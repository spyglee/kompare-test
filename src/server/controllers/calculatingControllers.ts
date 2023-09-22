import { Request, Response } from 'express'

import Calculations from '../schemas/calculations.ts'
import priceCalculator from '../handlers/placeCalculator.ts'

const calculate = (req: Request, res: Response) => {
  const result = priceCalculator(req.body)
  const calculations = new Calculations(result)
    calculations.save()
    .then(() => {
      console.log('user saved')
      const response = JSON.stringify(result)
      res.end(response)
    })
    .catch(error => {
      const response = JSON.stringify(error)
      res.status(404)
      res.end(response)
      console.error(error)
    })
}

export default calculate