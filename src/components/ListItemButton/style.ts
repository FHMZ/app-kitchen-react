import { Avatar, ListItemButton, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(1),
  height: theme.spacing(1),
  backgroundColor: grey[400],
}))

export const StyledSubListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
}))
