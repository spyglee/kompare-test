import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

type ContextType = {
  ao: boolean,
  setAo: Dispatch<React.SetStateAction<boolean>>,
  agentsDiscount: boolean,
  setAgentsDiscount: Dispatch<React.SetStateAction<boolean>>,
  birthDate: Date | string | null,
  setBirthDate: Dispatch<React.SetStateAction<Date | string | null>>,
  bonusProtection: boolean,
  setBonusProtection: Dispatch<React.SetStateAction<boolean>>,
  city: string,
  setCity: Dispatch<React.SetStateAction<string>>
  commertialDiscount: boolean,
  setCommertialDiscount: Dispatch<React.SetStateAction<boolean>>,
  error: string | undefined,
  setError: Dispatch<React.SetStateAction<string | undefined>>,
  glassCoverage: boolean,
  setGlassCoverage: Dispatch<React.SetStateAction<boolean>>,
  name: string,
  setName: Dispatch<React.SetStateAction<string>>,
  loading: boolean,
  setLoading: Dispatch<React.SetStateAction<boolean>>,
  priceMatch: number | string,
  setPriceMatch: Dispatch<React.SetStateAction<number | string>>,
  success: string | undefined,
  setSuccess: Dispatch<React.SetStateAction<string | undefined>>,
  summerDiscount: boolean,
  setSummerDiscount: Dispatch<React.SetStateAction<boolean>>,
  vehiclePower: number | string,
  setVehiclePower: Dispatch<React.SetStateAction<number | string>>,
  voucher: number | string,
  setVoucher: Dispatch<React.SetStateAction<number | string>>,
}

const Context = createContext<ContextType>({
  ao: false,
  setAo: () => {},
  agentsDiscount: false,
  setAgentsDiscount: () => {},
  birthDate: '',
  setBirthDate: () => {},
  bonusProtection: false,
  setBonusProtection: () => {},
  city: '',
  setCity: () => {},
  commertialDiscount: false,
  setCommertialDiscount: () => {},
  error: '',
  setError: () => {},
  glassCoverage: false,
  setGlassCoverage: () => {},
  name: '',
  setName: () => {},
  loading: false,
  setLoading: () => {},
  priceMatch: '',
  setPriceMatch: () => {},
  success: undefined,
  setSuccess: () => {},
  summerDiscount: false,
  setSummerDiscount: () => {},
  vehiclePower: '',
  setVehiclePower: () => {},
  voucher: '',
  setVoucher: () => {},
})

export const useContekst = () => useContext( Context )

const ContextProvider: React.FC<PropsWithChildren> = ( { children } ) => {
  const [error, setError] = useState<string | undefined>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<string | undefined>('')
  const [name, setName] = useState<string>('')
  const [birthDate, setBirthDate] = useState<string | Date | null>(new Date(2000, 0, 1))
  const [city, setCity] = useState<string>('');
  const [vehiclePower, setVehiclePower ] = useState<number | string>('');
  const [voucher, setVoucher] = useState<number | string>('');
  const [priceMatch, setPriceMatch] = useState<number | string>('');
  const [commertialDiscount, setCommertialDiscount] = useState<boolean>(false);
  const [agentsDiscount, setAgentsDiscount] = useState<boolean>(false);
  const [summerDiscount, setSummerDiscount] = useState<boolean>(false);
  const [bonusProtection, setBonusProtection] = useState<boolean>(false);
  const [ao, setAo] = useState<boolean>(false);
  const [glassCoverage, setGlassCoverage] = useState<boolean>(false);

  const value = {
    agentsDiscount,
    setAgentsDiscount,
    ao,
    setAo,
    birthDate,
    setBirthDate,
    bonusProtection,
    setBonusProtection,
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
