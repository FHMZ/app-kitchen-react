import { useState } from 'react'

export const useSnackbarAlert = () => {
  const [snackbarAlertOpen, setSnackbarAlertOpen] = useState(false)
  const onSnackbarAlertOpen = () => setSnackbarAlertOpen(!snackbarAlertOpen)
  return {
    snackbarAlertOpen,
    setSnackbarAlertOpen,
    onSnackbarAlertOpen,
  }
}
