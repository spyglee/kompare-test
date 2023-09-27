import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import useFetch from '../../hooks/useFecth'
import { useContekst } from '../../context'

type logType = {
  _id: string,
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
  voucherPrice: number,
  __v: number,
}

const dummyLog = {
  _id: '',
  name: '',
  birthDate: '',
  city: '',
  vehiclePower: NaN,
  voucher: NaN,
  priceMatch: NaN,
  commertialDiscount: false,
  agentsDiscount: false,
  summerDiscount: false,
  strongCarSurcharge: false,
  bonusProtection: false,
  ao: false,
  glassCoverage: false,
  agentsDiscountPrice: NaN,
  aoPrice: NaN,
  basePrice: NaN,
  bonusProtectionPrice: NaN,
  carSurchargePrice: 0,
  commertialDiscountPrice: NaN,
  glassCoveragePrice: NaN,
  totalPrice: NaN,
  vipDiscountPrice: NaN,
  voucherPrice: NaN,
  __v: NaN,
}

const Logs = () => {
  const fetch = useFetch()
  const context = useContekst()
  const [data, setData] = useState<[logType] | []>([])

  const formatDate = (inputDate: string): string => {
    if (inputDate.includes('-')) {
      const [date] = inputDate.split('T')
      const [year, month, day] = date.split('-')
      return `${day}.${month}.${year}`
    }
    return inputDate
  }

  const getLogs = useCallback(async() => {
    setData([dummyLog])
    const data = await fetch('http://localhost:8000/logs', 'GET', undefined, true)
    if (data.status === 'success') {
      setData(data.data)
    } else {
      context.setError(data.message)
    }
  }, [context, fetch])

  useEffect(() => {
    if (!data.length) {
      getLogs()
    }
  }, [data, getLogs])
  return (
    <Card sx={{ m: 2, p: 2}}>
      <div style={{ overflowX: 'scroll' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Birth date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Vehicle Power
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Vouvher
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Price match
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Base price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Commertial discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Agents discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Summer discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Strong car surcharge
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Bonus protection
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  AO +
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Glass coverage
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  VIP discount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  Total price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!data.length && !!data[0]._id && data.map((log) => (
              <TableRow key={log?._id}>
              <TableCell>
                <Typography>
                  {log.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {formatDate(log.birthDate)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.vehiclePower}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.voucherPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.priceMatch}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.basePrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.commertialDiscountPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.agentsDiscountPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  0
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.carSurchargePrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.bonusProtectionPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.aoPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.glassCoveragePrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.vipDiscountPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {log.totalPrice}
                </Typography>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}

export default Logs
