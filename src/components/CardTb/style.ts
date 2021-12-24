import { Box, Card, styled, Typography } from '@mui/material'
import { BOX_SHADOW } from '../../utils/constants'

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color?: string
}>(({ color, theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: BOX_SHADOW,
  ...(color !== undefined && {
    backgroundColor: color,
  }),
}))

export const StyledCardThSorteableCell = styled(Box)(() => ({
  display: 'inline',
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: 'black',
  paddingTop: theme.spacing(0.6),
}))
