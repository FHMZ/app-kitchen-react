import { useState } from 'react'

export const useSwitch = () => {
  const [switchKey, setSwitch] = useState(false)
  const onSwitchKey = () => setSwitch(!switchKey)
  return { switchKey, onSwitchKey }
}

export const useSnackbarAlert = () => {
  const [snackbarAlertOpen, setSnackbarAlertOpen] = useState(false)
  const onSnackbarAlertOpen = () => setSnackbarAlertOpen(!snackbarAlertOpen)
  return {
    snackbarAlertOpen,
    setSnackbarAlertOpen,
    onSnackbarAlertOpen,
  }
}

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const onMenuDrawerOpen = () => setDrawerOpen(!drawerOpen)
  return { onMenuDrawerOpen, drawerOpen }
}
