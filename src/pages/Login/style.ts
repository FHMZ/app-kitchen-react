import { styled } from '@mui/material'
import MuiAvatar from '@mui/material/Avatar'
import { grey } from '@mui/material/colors'
import MuiContainer from '@mui/material/Container'

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#fff',
}))

export const StyledContent = styled(MuiContainer)(({ theme }) => ({
  flex: 1,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(0),
}))

export const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  backgroundColor: grey[300],
}))

export const StyledPaper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const StyledFooter = styled('footer')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
}))
