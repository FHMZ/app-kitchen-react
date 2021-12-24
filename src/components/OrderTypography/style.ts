import { ListItemIcon, styled } from '@mui/material'
import Typography from '@mui/material/Typography'

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontWeight: 600,
  color: 'black',
  marginLeft: theme.spacing(2),
}))

export const StyledQuantityLabel = styled(ListItemIcon)(({ theme }) => ({
  minWidth: theme.spacing(3),
  color: 'black',
}))
