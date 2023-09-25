import { useNavigate } from 'react-router-dom'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Toolbar,
  Typography,
} from '@mui/material'

import { headerStyle } from '../common/Styles'
import { useContekst } from '../../context'

const Sidebar = () => {
  const context = useContekst()
  const navigate = useNavigate()

  const seeLogs = () => {
    navigate('/logs')
  }

  return (
    <Toolbar sx={{ backgroundColor: 'lightgrey', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography component={'h1'} sx={headerStyle}>
        Coverages
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={context.bonusProtection}
            onChange={(event, checked) => context.setBonusProtection(checked)}
          />
        }
        label='Bonus protection'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={context.ao}
            onChange={(event, checked) => context.setAo(checked)}
          />
        }
        label='AO +'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={context.glassCoverage}
            onChange={(event, checked) => context.setGlassCoverage(checked)}
          />
        }
        label='Glass coverage'
      />
      <Button sx={{ mt: 'auto', ml: 'auto', mr: 'auto' }} onClick={seeLogs}>
        See logs
      </Button>
    </Toolbar>
  )
}

export default Sidebar
