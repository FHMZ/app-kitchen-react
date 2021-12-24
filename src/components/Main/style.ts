import { styled } from '@mui/material/styles'
import { DRAWER_WIDTH } from '../../utils/constants'

export const StyledMainShrinkRight = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -DRAWER_WIDTH,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}))
