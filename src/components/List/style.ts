import { List, ListSubheader, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const StyledSubheaderTitle = styled(ListSubheader)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  color: '#000'
}))

export const StyledList = styled(List)(() => ({
  background: grey[200],
}))