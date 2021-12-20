import { Card, styled } from '@mui/material'
import { BOX_SHADOW } from '../../../../utils/constants'

export const StyledCardList = styled(Card, {
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
