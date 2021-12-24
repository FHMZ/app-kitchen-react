import { Box, Button, styled } from '@mui/material'

export const StyledBoxForm = styled(Box)(() => ({
  width: '70%',
  padding: '2px 1px 0 1px',
  '@media (max-width: 1000px)': {
    width: '80%',
  },
  '@media (max-width: 800px)': {
    width: '90%',
  },
}))

export const StyledLoginButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  margin: theme.spacing(3, 0, 2),
}))