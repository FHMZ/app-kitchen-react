import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export const StyledExpand = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'clickIn',
})<{
  clickIn: boolean
}>(({ clickIn, theme }) => ({
  transform: !clickIn ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  color: 'black',
}))
