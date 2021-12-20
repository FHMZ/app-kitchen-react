import { Avatar, ListItemIcon, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(1),
  height: theme.spacing(1),
  backgroundColor: grey[400],
}))

export const StyledQuantityLabel = styled(ListItemIcon)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  minWidth: theme.spacing(4),
  color: '#000',
}))


export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  minWidth: theme.spacing(5),
  color: '#000',
}))
