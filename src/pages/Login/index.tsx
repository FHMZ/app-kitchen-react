import MuiContainer from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import MuiTypography from '@mui/material/Typography'
import React from 'react'
import AvatarLogoSRL from '../../assets/img/srlLogo1.svg'
import { TypographyBold } from '../../components/Typography'
import LoginForm from './components/Form'
import {
  Container,
  StyledAvatar,
  StyledContent,
  StyledFooter,
  StyledPaper,
} from './style'

const Copyright = () => (
  <MuiContainer maxWidth="sm">
    <MuiTypography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span color="inherit">South Rock Lab</span> {new Date().getFullYear()}
      {'.'}
    </MuiTypography>
  </MuiContainer>
)

const Login: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <StyledContent maxWidth="sm">
        <StyledPaper>
          <StyledAvatar src={AvatarLogoSRL} />
          <TypographyBold component="h6" variant="h6" text="Login" />
          <LoginForm />
        </StyledPaper>
      </StyledContent>
      <StyledFooter>
        <Copyright />
      </StyledFooter>
    </Container>
  )
}

export default Login
