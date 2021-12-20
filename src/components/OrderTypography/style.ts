import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontWeight: 600,
  color: 'black',
  marginLeft: theme.spacing(2),
}))
