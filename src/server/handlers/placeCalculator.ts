import getAge from '../helpers/getAge.ts'
import roundPercisely from './roundPercisely.ts'

type bodyType = {
  name: string,
  birthDate: string,
  city: 'Zagreb' | 'Rijeka' | 'Osijek',
  vehiclePower: number,
  voucher: number,
  priceMatch: number,
  commertialDiscount: boolean,
  agentsDiscount: boolean,
  summerDiscount: boolean,
  strongCarSurcharge: boolean,
  bonusProtection: boolean,
  ao: boolean,
  glassCoverage: boolean,
}

type calculationsType = {
  agentsDiscountPrice: number,
  aoPrice: number,
  basePrice: number,
  bonusProtectionPrice: number,
  carSurchargePrice: number,
  commertialDiscountPrice: number,
  glassCoveragePrice: number,
  totalPrice: number,
  vipDiscountPrice: number,
  voucherPrice: number,
}

const formulateBasePrice = (city: 'Zagreb' | 'Rijeka' | 'Osijek', birthDate: string): number => {
  let basePrice = 0
  if (city === 'Zagreb') {
    basePrice = 50
  } else if (city === 'Rijeka') {
    basePrice = 40
  } else {
    basePrice = 30
  }

  if (getAge(birthDate) < 30) {
    basePrice += 10
  }
  
  return basePrice
}

const formulateSurchargePrice = (shouldApply: boolean, power: number, basePrice: number): number => {
  if (shouldApply && power > 100) {
    return roundPercisely(basePrice * 0.1)
  }
  return 0
}

const formulateBonusProtectionPrice = (shouldApply: boolean, basePrice: number ): number => {
  if (shouldApply) {
    return roundPercisely(basePrice * 0.12)
  }
  return 0
}

const formulateAoPrice = (shouldApply: boolean, birthDate: string): number => {
  if (shouldApply) {
    if (getAge(birthDate) < 30) {
      return 55
    }
    return 105
  }
  return 0
}

const formulateGlassCoveragePrice = (shouldApply: boolean, power: number): number => {
  if (shouldApply) {
    return roundPercisely(power * 0.8)
  }
  return 0
}

const formulateCommertialDiscountPrice = (shouldApply: boolean, basePrice: number): number => {
  if (shouldApply) {
    return roundPercisely(basePrice * -0.1)
  }
  return 0
}

const formulateAgentsDiscountPrice = (shouldApply: boolean, coverages: number[]): number => {
  if (shouldApply) {
    const appliedCoverages = coverages.filter(el => el > 0)
    if (appliedCoverages.length > 1) {
      return roundPercisely(coverages.reduce((prev, val) => prev + val, 0) * -0.2)
    }
  }
  return 0
}

const formulateVipDiscountPrice = (power: number, calculations: calculationsType): number => {
  if (power > 80) {
    return roundPercisely(Object.values(calculations).reduce((prev, val) => prev + val, 0) * -0.05)
  }
  return 0
}

const formulateCalculations = (body: bodyType, basePrice: number): calculationsType => {
  const calculations = {
    agentsDiscountPrice: 0,
    aoPrice: 0,
    basePrice: 0,
    bonusProtectionPrice: 0,
    carSurchargePrice: 0,
    commertialDiscountPrice: 0,
    glassCoveragePrice: 0,
    totalPrice: 0,
    vipDiscountPrice: 0,
    voucherPrice: 0,
  }
  calculations.basePrice = basePrice

  calculations.bonusProtectionPrice = formulateBonusProtectionPrice(body.bonusProtection, calculations.basePrice)
  calculations.aoPrice = formulateAoPrice(body.ao, body.birthDate)
  calculations.glassCoveragePrice = formulateGlassCoveragePrice(body.glassCoverage, body.vehiclePower)

  calculations.commertialDiscountPrice = formulateCommertialDiscountPrice(body.commertialDiscount, calculations.basePrice)
  calculations.agentsDiscountPrice = formulateAgentsDiscountPrice(body.agentsDiscount, [calculations.bonusProtectionPrice, calculations.aoPrice, calculations.glassCoveragePrice])
  calculations.carSurchargePrice = formulateSurchargePrice(body.strongCarSurcharge, body.vehiclePower, calculations.basePrice)
  calculations.vipDiscountPrice = formulateVipDiscountPrice(body.vehiclePower, calculations)
  calculations.voucherPrice = -body.voucher
  calculations.totalPrice = roundPercisely(Object.values(calculations).reduce((prev, val) => prev + val, 0))
  return calculations
}

const getNewBasePrice = (calculations: calculationsType, body: bodyType): number => {
  let currentBasePrice = calculations.basePrice
  let currentCalculations = calculations
  let currentTotalPrice = calculations.totalPrice

  const maxIterations = 1000
  let iterations = 0

  const tolerance = 0.01

  while (Math.abs(currentTotalPrice - body.priceMatch) > tolerance && iterations < maxIterations) {
    const priceDifference = body.priceMatch - currentTotalPrice
    currentBasePrice += priceDifference

    currentCalculations = formulateCalculations(body, currentBasePrice)
    currentTotalPrice = currentCalculations.totalPrice

    iterations++
  }

  return roundPercisely(currentBasePrice)
}

const adjustPriceToMatch = (calculations: calculationsType, body: bodyType): calculationsType => {
  const newBasePrice = getNewBasePrice(calculations, body)
  return formulateCalculations(body, newBasePrice)
}

const priceCalculator = (body: bodyType): object => {
  const basePrice = formulateBasePrice(body.city, body.birthDate)
  let calculations = formulateCalculations(body, basePrice)

  if (body.priceMatch) {
    calculations = adjustPriceToMatch(calculations, body)
  }

  return {
    ...body,
    ...calculations
  }
}

export default priceCalculator
