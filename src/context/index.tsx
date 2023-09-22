import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

type dispatchBoolean = Dispatch<React.SetStateAction<boolean>>
type dispatchString = Dispatch<React.SetStateAction<string>>
type dispatchDate = Dispatch<React.SetStateAction<Date | string | null>>
type dispatchStringOrUndefined = Dispatch<React.SetStateAction<string | undefined>>
type dispatchStringOrNumber = Dispatch<React.SetStateAction<string | number>>

const emptyFunc = () => {}

type calculationsType = {
    name: string,
    birthDate: string,
    city: string,
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
    agentsDiscountPrice: number,
    aoPrice: number,
    basePrice: number,
    bonusProtectionPrice: number,
    carSurchargePrice: number,
    commertialDiscountPrice: number,
    glassCoveragePrice: number,
    totalPrice: number,
    vipDiscountPrice: number,
    voucherPrice: number
}

const emptyCalculations: calculationsType = {
    name: '',
    birthDate: '',
    city: '',
    vehiclePower: 0,
    voucher: 0,
    priceMatch: 0,
    commertialDiscount: false,
    agentsDiscount: false,
    summerDiscount: false,
    strongCarSurcharge: true,
    bonusProtection: false,
    ao: false,
    glassCoverage: false,
    agentsDiscountPrice: 0,
    aoPrice: 0,
    basePrice: 0,
    bonusProtectionPrice: 0,
    carSurchargePrice: 0,
    commertialDiscountPrice: 0,
    glassCoveragePrice: 0,
    totalPrice: 0,
    vipDiscountPrice: 0,
    voucherPrice: 0
}

type ContextType = {
  ao: boolean,
  setAo: dispatchBoolean,
  agentsDiscount: boolean,
  setAgentsDiscount: dispatchBoolean,
  birthDate: Date | string | null,
  calculations: calculationsType,
  setCalculations: Dispatch<React.SetStateAction<calculationsType>>
  setBirthDate: dispatchDate,
  bonusProtection: boolean,
  setBonusProtection: dispatchBoolean,
  city: string,
  setCity: dispatchString
  commertialDiscount: boolean,
  setCommertialDiscount: dispatchBoolean,
  error: string | undefined,
  setError: dispatchStringOrUndefined,
  glassCoverage: boolean,
  setGlassCoverage: dispatchBoolean,
  name: string,
  setName: dispatchString,
  loading: boolean,
  setLoading: dispatchBoolean,
  priceMatch: number | string,
  setPriceMatch: dispatchStringOrNumber,
  success: string | undefined,
  setSuccess: dispatchStringOrUndefined,
  summerDiscount: boolean,
  setSummerDiscount: dispatchBoolean,
  vehiclePower: number | string,
  setVehiclePower: dispatchStringOrNumber,
  voucher: number | string,
  setVoucher: dispatchStringOrNumber,
}

const Context = createContext<ContextType>({
  ao: false,
  setAo: emptyFunc,
  agentsDiscount: false,
  setAgentsDiscount: emptyFunc,
  birthDate: '',
  setBirthDate: emptyFunc,
  bonusProtection: false,
  setBonusProtection: emptyFunc,
  calculations: emptyCalculations,
  setCalculations: () => {},
  city: '',
  setCity: emptyFunc,
  commertialDiscount: false,
  setCommertialDiscount: emptyFunc,
  error: '',
  setError: emptyFunc,
  glassCoverage: false,
  setGlassCoverage: emptyFunc,
  name: '',
  setName: emptyFunc,
  loading: false,
  setLoading: emptyFunc,
  priceMatch: '',
  setPriceMatch: emptyFunc,
  success: undefined,
  setSuccess: emptyFunc,
  summerDiscount: false,
  setSummerDiscount: emptyFunc,
  vehiclePower: '',
  setVehiclePower: emptyFunc,
  voucher: '',
  setVoucher: emptyFunc,
})

export const useContekst = () => useContext( Context )

const ContextProvider: React.FC<PropsWithChildren> = ( { children } ) => {
  const [error, setError] = useState<string | undefined>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<string | undefined>('')
  const [name, setName] = useState<string>('')
  const [birthDate, setBirthDate] = useState<string | Date | null>(new Date(2000, 0, 1))
  const [city, setCity] = useState<string>('Zagreb')
  const [vehiclePower, setVehiclePower ] = useState<number | string>('')
  const [voucher, setVoucher] = useState<number | string>('')
  const [priceMatch, setPriceMatch] = useState<number | string>('')
  const [commertialDiscount, setCommertialDiscount] = useState<boolean>(false)
  const [agentsDiscount, setAgentsDiscount] = useState<boolean>(false)
  const [summerDiscount, setSummerDiscount] = useState<boolean>(false)
  const [bonusProtection, setBonusProtection] = useState<boolean>(false)
  const [ao, setAo] = useState<boolean>(false)
  const [glassCoverage, setGlassCoverage] = useState<boolean>(false)
  const [calculations, setCalculations] = useState<calculationsType>(emptyCalculations)

  const value = {
    agentsDiscount,
    setAgentsDiscount,
    ao,
    setAo,
    birthDate,
    setBirthDate,
    bonusProtection,
    setBonusProtection,
    calculations,
    setCalculations,
    city,
    setCity,
    commertialDiscount,
    setCommertialDiscount,
    error,
    setError,
    glassCoverage,
    setGlassCoverage,
    loading,
    setLoading,
    name,
    setName,
    priceMatch,
    setPriceMatch,
    success,
    setSuccess,
    summerDiscount,
    setSummerDiscount,
    vehiclePower,
    setVehiclePower,
    voucher,
    setVoucher,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
