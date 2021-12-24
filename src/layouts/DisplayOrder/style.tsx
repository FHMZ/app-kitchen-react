import { grey } from '@mui/material/colors'
import { styled } from '@mui/styles'

export const Container = styled('div')(() => ({
  display: 'flex',
  backgroundColor: grey[400],//'#222244'
}))

export const StyledHeaderContent = styled('div')(() => ({
  flex: 1,
}))