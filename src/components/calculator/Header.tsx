import {
  Toolbar,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material'
import { useContekst } from '../../context'


const Header = () => {
  const tollbar = {
    p: 2,
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const context = useContekst()

  return (
    <Toolbar component='div' sx={tollbar}>
        <FormControlLabel
          control={
            <Checkbox
              checked={context.commertialDiscount}
              onChange={(_, checked) => context.setCommertialDiscount(checked)}
            />
          }
          label='Commertial discount'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={context.agentsDiscount}
              onChange={(_, checked) => context.setAgentsDiscount(checked)}
            />
          }
          label='Agents discount'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={context.summerDiscount}
              onChange={(_, checked) => context.setSummerDiscount(checked)}
            />
          }
          label='Summer discount'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked
              disabled
            />
          }
          label='Strong car surcharge'
        />
        <Typography>
          {`Total price: ${context.calculations.totalPrice} EUR`}
        </Typography>
    </Toolbar>
  )
}

export default Header
