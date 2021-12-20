import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import React from 'react'
import { StyledAppBar } from './style'

interface IAppBarProps extends MuiAppBarProps {
  shrinkRight: boolean | undefined
  children: React.ReactNode
}

const AppBar: React.FC<IAppBarProps> = ({ shrinkRight, children }) => (
  <StyledAppBar open={shrinkRight}>{children}</StyledAppBar>
)

export default AppBar
