import { Response } from 'express'

import Calculations from '../schemas/calculations.ts'

const getLogs = async (res: Response) => {
  try {
    const logs = await Calculations.find()
    console.log('logs were taken')
    const response = JSON.stringify(logs)
    res.end(response)
  } catch(error) {
    const response = JSON.stringify(error)
    res.status(404)
    res.end(response)
    console.error(error)
  }
}

export default getLogs