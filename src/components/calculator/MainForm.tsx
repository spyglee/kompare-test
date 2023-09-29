import { DatePicker } from '@mui/x-date-pickers'
import { Save } from '@mui/icons-material'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  Button,
  Card,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'

import useFetch from '../../hooks/useFecth'
import { headerStyle } from '../common/Styles'
import { useContekst } from '../../context'

const cardStyle = {
  mt: 2,
  ml: 2,
  mr: 2,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  flex: 2,
}

type eventType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const priceContainer = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
}

const MainForm = () => {
  const fetch = useFetch()
  const context = useContekst()
  const [formIsValid, setFormIsValid] = useState(true)

  const onNameChange = (event: eventType) => {
    context.setName(event.target.value)
  }

  const onBirthDateChange = (value: string | Date | null) => {
    context.setBirthDate(value)
  }

  const onCityChange = (event: eventType) => {
    context.setCity(event.target.value)
  }

  const onVehiclePowerChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setVehiclePower(value)
  }

  const onVoucherChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setVoucher(value)
  }

  const onPriceMatchChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setPriceMatch(value)
  }

  const makeServerDate = (date: Date | null | string): string => {
    if (date && typeof date !== 'string') {
      return `${date.getFullYear()}-${+date.getMonth() + 1}-${date.getDate()}`
    }
    return ''
  }

  const formulateBody = useCallback(() => {
    return {
      name: context.name,
      birthDate: makeServerDate(context.birthDate),
      city: context.city,
      vehiclePower: context.vehiclePower,
      voucher: context.voucher || 0,
      priceMatch: context.priceMatch || 0,
      commertialDiscount: context.commertialDiscount,
      agentsDiscount: context.agentsDiscount,
      summerDiscount: context.summerDiscount,
      strongCarSurcharge: true,
      bonusProtection: context.bonusProtection,
      ao: context.ao,
      glassCoverage: context.glassCoverage
    }
  }, [
    context.agentsDiscount,
    context.ao,
    context.birthDate,
    context.bonusProtection,
    context.city,
    context.commertialDiscount,
    context.glassCoverage,
    context.name,
    context.priceMatch,
    context.summerDiscount,
    context.vehiclePower,
    context.voucher,
  ])

  const getCalculations = useCallback(async() => {
    try {
      const request = await fetch('http://localhost:8000/calculate', 'POST', formulateBody())
      if (request.status === 'success') {
        context.setCalculations(request.data)
      } else {
        context.setError(request.message)
      }
    } catch (error) {
      console.error(error)
    }
  }, [context, fetch, formulateBody])

  const isValid = useMemo(() => (
    context.name && context.birthDate && context.city && context.vehiclePower),
    [context.birthDate, context.city, context.name, context.vehiclePower]
  )

  const validateAndSave = useCallback(() => {
    if (!isValid) {
      context.setError('Looks like you have forgotten filling some fields...')
      return setFormIsValid(false)
    }
    setFormIsValid(true)
    getCalculations()
  }, [context, getCalculations, isValid])

  useEffect(() => {
    if (isValid) {
      validateAndSave()
    }
  }, [
    context.agentsDiscount,
    context.ao,
    context.bonusProtection,
    context.commertialDiscount,
    context.glassCoverage,
    context.summerDiscount,
  ])

  return (
    <Card elevation={5} sx={cardStyle}>
      <Typography component={'h1'} sx={headerStyle}>
        User data
      </Typography>
      <TextField
        autoFocus
        error={!formIsValid && !context.name}
        label='Name'
        onChange={onNameChange}
        value={context.name}
        variant='outlined'
      />
      <DatePicker
        label='Birthdate'
        onChange={onBirthDateChange}
        value={context.birthDate}
      />
      <TextField
        error={!formIsValid && !context.city}
        label ='City'
        onChange={onCityChange}
        select
        value={context.city}
        variant='outlined'
      >
        <MenuItem value='Zagreb'>
          Zagreb
        </MenuItem>
        <MenuItem value='Rijeka'>
          Rijeka
        </MenuItem>
        <MenuItem value='Osijek'>
          Osijek
        </MenuItem>
      </TextField>
      <TextField
        error={!formIsValid && !context.vehiclePower}
        label='Vehicle power'
        onChange={onVehiclePowerChange}
        type='number'
        value={context.vehiclePower}
        variant='outlined'
      />
      <div style={priceContainer}>
        <TextField
          label='Voucher'
          onChange={onVoucherChange}
          sx={{ flex: 1, mr: 2 }}
          type='number'
          value={context.voucher}
          variant='outlined'
        />
        <Typography>
          EUR
        </Typography>
      </div>
      <div style={priceContainer}>
        <TextField
          label='Price match'
          onChange={onPriceMatchChange}
          sx={{ flex: 1, mr: 2 }}
          type='number'
          value={context.priceMatch}
          variant='outlined'
        />
        <Typography>
          EUR
        </Typography>
      </div>
      <Button onClick={validateAndSave}>
        <Save /> Save
      </Button>
    </Card>
  )
}

export default MainForm
