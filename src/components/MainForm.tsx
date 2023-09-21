import { DatePicker } from '@mui/x-date-pickers'
import { Save } from '@mui/icons-material';
import {
  useCallback,
  useEffect,
} from 'react';
import {
  Button,
  Card,
  TextField,
  Typography,
} from '@mui/material';

import useFetch from '../hooks/useFecth';
import { headerStyle } from './common/Styles';
import { useContekst } from '../context';

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

  const getTestData = useCallback(async () => {
    const data = await fetch('http://localhost:8000/', 'GET', undefined, true)
    context.setSuccess(data?.data?.message)
  }, [context, fetch])

  useEffect(() => {
    getTestData()
  }, [])

  useEffect(() => {
      document.querySelector("input[type='number']")
        ?.addEventListener('keypress', event => {
          if (event?.which === 8) {
            return;
          }
          if (event?.which < 48 || event?.which > 57) {
            event.preventDefault();
          }
        })
  }, [])

  const onNameChange = (event: eventType) => {
    context.setName(event.target.value)
  };

  const onBirthDateChange = (value: string | Date | null) => {
    context.setBirthDate(value)
  }

  const onCityChange = (event: eventType) => {
    context.setCity(event.target.value)
  };

  const onVehiclePowerChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setVehiclePower(value)
  };

  const onVoucherChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setVoucher(value)
  };

  const onPriceMatchChange = (event: eventType) => {
    const value  = event.target.value.replace('/^[a-z\b]+$/', '')
    context.setPriceMatch(value)
  };

  return (
    <Card elevation={5} sx={cardStyle}>
      <Typography component={'h1'} sx={headerStyle}>
        User data
      </Typography>
      <TextField
        autoFocus
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
        label='City'
        onChange={onCityChange}
        value={context.city}
        variant='outlined'
      />
      <TextField
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
      <Button>
        <Save /> Save
      </Button>
    </Card>
  )
};

export default MainForm;
