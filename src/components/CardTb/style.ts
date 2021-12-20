import { Box, Card, styled } from '@mui/material'
import { blue } from '@mui/material/colors'
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

export const StyledBorderColor = styled('div', {
  shouldForwardProp: (prop) => prop !== 'delivery',
})<{
  delivery: boolean
}>(({ delivery }) => ({
  ...(delivery && {
    borderStyle: 'solid',
    borderWidth: 'thick',
    borderColor: blue[300],
  }),
}))
