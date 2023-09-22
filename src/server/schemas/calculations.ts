import mongoose from 'mongoose'

const CalculationSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  city: String,
  vehiclePower: Number,
  voucher: Number,
  priceMatch: Number,
  commertialDiscount: Boolean,
  agentsDiscount: Boolean,
  summerDiscount: Boolean,
  strongCarSurcharge: Boolean,
  bonusProtection: Boolean,
  ao: Boolean,
  glassCoverage: Boolean,
  agentsDiscountPrice: Number,
  aoPrice: Number,
  basePrice: Number,
  bonusProtectionPrice: Number,
  carSurchargePrice: Number,
  commertialDiscountPrice: Number,
  glassCoveragePrice: Number,
  totalPrice: Number,
  vipDiscountPrice: Number,
  voucherPrice: Number,
})

export default mongoose.model('calculation', CalculationSchema)
