import { Card, Typography } from '@mui/material';
import { useContekst } from '../context';

const Result = () => {
  const context = useContekst()

  return (
    <Card sx={{ m: 2, p: 2}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 600, mr: 2 }}>Basic price: </Typography>
        <Typography>42</Typography>
      </div>
      <Typography sx={{ fontWeight: 600, mr: 2 }}>Discounts</Typography>
      {context.commertialDiscount && (
        <Typography>Commertial discount</Typography>
      )}
      {context.agentsDiscount && (
        <Typography>Agents discount</Typography>
      )}
      {context.summerDiscount && (
        <Typography>Summer discount</Typography>
      )}
      <Typography>Strong car surchase</Typography>
      <Typography sx={{ fontWeight: 600, mr: 2 }}>Coverages</Typography>
      {context.bonusProtection && (
        <Typography>Bonus protection</Typography>
      )}
      {context.ao && (
        <Typography>AO +</Typography>
      )}
      {context.glassCoverage && (
        <Typography>Glass coverage</Typography>
      )}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 600, mr: 2 }}>Total price:</Typography>
        <Typography>42</Typography>
      </div>
    </Card>
  )
};

export default Result;
