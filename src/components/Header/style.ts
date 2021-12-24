import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledIconButtonMenu = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}))

export const StyledTitle = styled('div')(() => ({
  flex: 1,
}))
