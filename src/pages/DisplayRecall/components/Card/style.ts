import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  margin: theme.spacing(1, 2),
}))
