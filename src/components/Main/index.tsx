import { Toolbar } from '@mui/material'
import React from 'react'
import { StyledMainShrinkRight } from './style'

interface IMainProps {
  open: boolean
  children: React.ReactNode
}

const MainShrinkRight: React.FC<IMainProps> = ({ open, children }) => {
  return (
    <StyledMainShrinkRight open={open}>
      <Toolbar />
      {children}
    </StyledMainShrinkRight>
  )
}

export default MainShrinkRight
