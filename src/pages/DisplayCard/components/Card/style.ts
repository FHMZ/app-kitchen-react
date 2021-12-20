import {
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from '@mui/material'
import { BOX_SHADOW } from '../../../../utils/constants'

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string
}>(({ color, theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: BOX_SHADOW,
  backgroundColor: color,
}))

export const StyledCardContent = styled(CardContent)(() => ({
  padding: 0,
}))

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}))

export const StyledCardActionsTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'direction',
})<{
  direction: string
}>(({ direction }) => ({
  ...(direction === 'right' && {
    flex: 1,
  }),
  fontWeight: 600,
}))