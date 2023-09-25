import { Card, Typography } from '@mui/material'
import { useContekst } from '../../context'
import { baseMarginRight, boldText } from '../common/Styles'

const Result = () => {
  const context = useContekst()

  return (
    <Card sx={{ m: 2, p: 2}}>
      <table>
        <tbody>
          <tr>
            <td>
              <Typography sx={boldText}>Base price: </Typography>
            </td>
            <td>
              <Typography>
                {context.calculations.basePrice ? `${context.calculations.basePrice} EUR` : ' '}
              </Typography>
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
                <Typography>
                  {context.calculations.commertialDiscountPrice ? `${context.calculations.commertialDiscountPrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          {context.agentsDiscount && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Agents discount: </Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.agentsDiscountPrice ? `${context.calculations.agentsDiscountPrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          {context.summerDiscount && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Summer discount: </Typography>
              </td>
              <td>
                <Typography>0 EUR</Typography>
              </td>
            </tr>
          )}
          {!!context.calculations.vipDiscountPrice && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>VIP discount: </Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.vipDiscountPrice}
                </Typography>
              </td>
            </tr>
          )}
          {!!context.calculations.carSurchargePrice && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Strong car surchase: </Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.carSurchargePrice ? `${context.calculations.carSurchargePrice} EUR` : '0 EUR'}
                </Typography>
              </td>
            </tr>
          )}
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
                <Typography>
                  {context.calculations.bonusProtectionPrice ? `${context.calculations.bonusProtectionPrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          {context.ao && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>AO +: </Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.aoPrice ? `${context.calculations.aoPrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          {context.glassCoverage && (
            <tr>
              <td>
                <Typography sx={baseMarginRight}>Glass coverage: </Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.glassCoveragePrice ? `${context.calculations.glassCoveragePrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          {!!context.calculations.voucherPrice && (
            <tr>
              <td>
                <Typography sx={boldText}>Voucher</Typography>
              </td>
              <td>
                <Typography>
                  {context.calculations.voucherPrice ? `${context.calculations.voucherPrice} EUR` : ' '}
                </Typography>
              </td>
            </tr>
          )}
          <tr>
            <td>
              <Typography sx={boldText}>Total price:</Typography>
            </td>
            <td>
              <Typography>
                {context.calculations.totalPrice ? `${context.calculations.totalPrice} EUR` : ' '}
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}

export default Result
