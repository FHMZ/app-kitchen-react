import { grey } from '@mui/material/colors'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'

export const StyledHeaderButton = styled(Button)(({ theme }) => ({
  height: theme.spacing(5),
  margin: theme.spacing(1),
  padding: theme.spacing(1.2, 1.2, 1, 1.2),
  borderRadius: theme.spacing(1),
  color: '#222244',
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#222244',
    color: '#fff'
  },
}))

export const StyledEndIcon = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(1),
  fontWeight: 600,
  fontSize: '14px !important',
  marginLeft: theme.spacing(0.7),
  marginBottom: theme.spacing(0.2),
  padding: theme.spacing(0.2, 0.8, 0, 0.8),
  color: '#222244',
  backgroundColor: grey[300],
}))
