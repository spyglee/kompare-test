import { Card, Typography } from '@mui/material';
import { useContekst } from '../context';
import { baseMarginRight, boldText } from './common/Styles';

const Result = () => {
  const context = useContekst()

  return (
    <Card sx={{ m: 2, p: 2}}>
      <table>
        <tbody>
          <tr>
            <td>
              <Typography sx={boldText}>Basic price: </Typography>
            </td>
            <td>
              <Typography>42 EUR</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography sx={boldText}>Discounts</Typography>
            </td>
            <td>
            </td>
          </tr>
          {context.commertialDiscount && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Commertial discount: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          {context.agentsDiscount && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Agents discount: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          {context.summerDiscount && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Summer discount: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          <tr>
            <td>
              <Typography sx={baseMarginRight}>Strong car surchase: </Typography>
            </td>
            <td>
              <Typography>10 EUR</Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography sx={boldText}>Coverages</Typography>
            </td>
            <td>
            </td>
          </tr>
          {context.bonusProtection && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Bonus protection: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          {context.ao && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>AO +: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          {context.glassCoverage && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Glass coverage: </Typography>
              </td>
              <td>
                <Typography>10 EUR</Typography>
              </td>
            </tr>
          )}
          <tr>
            <td>
              <Typography sx={boldText}>Total price:</Typography>
            </td>
            <td>
              <Typography>42 EUR</Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
};

export default Result;
