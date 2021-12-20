import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'
import { IconButton } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { HeaderButton } from '../../components/Header/Button'
import MainShrinkRight from '../../components/Main'
import SnackbarAlert from '../../components/Snackbar'
import SwipeableDrawer from '../../components/SwipeableDrawer'
import { useMenuDrawer, useSwipeableDrawer } from '../../hooks/Drawer'
import { useSnackbarAlert } from '../../hooks/Snackbar'
import { ALL_DAY_KEY, RECALL_KEY } from '../../utils/constants'
import { AllDayDrawer } from './components/Drawer'
import { Container, StyledHeaderContent } from './style'

interface ICardLayoutProps {
  children: React.ReactNode
}

const CardLayout: React.FC<ICardLayoutProps> = ({ children }) => {
  const { onSwipeableDrawerOpen, swipeableDrawerOpen } = useSwipeableDrawer()
  const { onMenuDrawerOpen, drawerOpen } = useMenuDrawer()
  const { snackbarAlertOpen, onSnackbarAlertOpen } = useSnackbarAlert()

  const history = useHistory()

  const handleAllDayKey = useCallback(
    (e: any) => e.key === ALL_DAY_KEY && onMenuDrawerOpen(),
    [onMenuDrawerOpen]
  )

  const handleRecallKeydown = useCallback(
    (e: any) => e.key === RECALL_KEY && history.push('/kdsRecall'),
    [history]
  )

  useEffect(() => {
    window.document.addEventListener('keydown', handleAllDayKey)
    window.document.addEventListener('keydown', handleRecallKeydown)
    return () => {
      window.document.removeEventListener('keydown', handleAllDayKey)
      window.document.removeEventListener('keydown', handleRecallKeydown)
    }
  }, [handleAllDayKey, handleRecallKeydown])

  const handleRecallLastOrder = () => onSnackbarAlertOpen()

  const handleActiveOrders = () => history.push('/kds')

  const handleRecallOrders = () => history.push('/kdsRecall')

  return (
    <>
      <Container>
        <Header shrinkRight={drawerOpen} onMenuClick={onSwipeableDrawerOpen}>
          <StyledHeaderContent>
            <HeaderButton
              text="Pedidos Ativos"
              endIcon={10}
              onClick={handleActiveOrders}
            />
            <HeaderButton
              text="Concluídos"
              endIcon={15}
              onClick={handleRecallOrders}
            />
          </StyledHeaderContent>
          <IconButton onClick={handleRecallLastOrder}>
            <ReplayRoundedIcon />
          </IconButton>
          <IconButton edge="end" onClick={onMenuDrawerOpen}>
            <AssignmentRoundedIcon />
          </IconButton>
        </Header>
        <MainShrinkRight open={drawerOpen}>{children}</MainShrinkRight>
        <SwipeableDrawer
          open={swipeableDrawerOpen}
          onOpen={onSwipeableDrawerOpen}
          onClose={onSwipeableDrawerOpen}
        />
        <AllDayDrawer open={drawerOpen} />
      </Container>
      <SnackbarAlert
        open={snackbarAlertOpen}
        severity="success"
        message="Rollback Last Status"
        onOpen={onSnackbarAlertOpen}
      />
    </>
  )
}

export default CardLayout
