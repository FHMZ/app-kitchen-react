import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'bold',
})<{
  bold?: boolean
  color?: string
}>(({ bold, color }) => ({
  ...(bold && {
    fontWeight: 600,
  }),
  ...(color !== undefined && {
    color: color,
  }),
}))
