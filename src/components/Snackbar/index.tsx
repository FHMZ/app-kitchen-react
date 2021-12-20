import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import React, { forwardRef } from 'react'
import { TAlertColors } from '../../utils/constants'

interface ISnackbarAlertProps {
  onOpen: () => void
  open?: boolean
  message: string
  severity: TAlertColors
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const SnackbarAlert: React.FC<ISnackbarAlertProps> = ({
  onOpen,
  open,
  message,
  severity,
}) => (
  <Stack spacing={2} sx={{ width: '100%' }}>
    <Snackbar open={open} autoHideDuration={5000} onClose={onOpen}>
      <Alert onClose={onOpen} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </Stack>
)

export default SnackbarAlert
