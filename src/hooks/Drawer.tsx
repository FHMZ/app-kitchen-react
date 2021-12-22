import { useState } from 'react'

export const useSwipeableDrawer = () => {
  const [swipeableDrawerOpen, setSwipeableDrawerOpen] = useState(false)
  const onSwipeableDrawerOpen = () => setSwipeableDrawerOpen(!swipeableDrawerOpen)
  return { onSwipeableDrawerOpen, swipeableDrawerOpen }
}

export const useMenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const onMenuDrawerOpen = () => setDrawerOpen(!drawerOpen)
  return { onMenuDrawerOpen, drawerOpen }
}