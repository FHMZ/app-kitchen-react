import { Box, styled } from '@mui/material'
import { blue } from '@mui/material/colors'

export const StyledCardThSorteableCell = styled(Box)(() => ({
  display: 'inline',
}))

export const StyledBorderColor = styled('div', {
  shouldForwardProp: (prop) => prop !== 'delivery',
})<{
  delivery: boolean
}>(({ delivery }) => ({
  ...(delivery && {
    borderStyle: 'solid',
    borderWidth: 'thick',
    borderColor: blue[300],
  }),
}))
