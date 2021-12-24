import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import { StyledIconButtonMenu, StyledTitle } from './style'

interface IHeaderProps {
  title?: string
  onMenuClick: () => void
  shrinkRight: boolean
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({
  title,
  onMenuClick,
  shrinkRight,
  children,
}) => {
  const hasTitle = title !== undefined

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" shrinkRight={shrinkRight}>
        <Toolbar>
          <StyledIconButtonMenu edge="start" onClick={onMenuClick}>
            <MenuRoundedIcon />
          </StyledIconButtonMenu>
          {hasTitle && (
            <StyledTitle title={title}>
              <Typography color="textPrimary" variant="h6" noWrap>
                {title}
              </Typography>
            </StyledTitle>
          )}
          {children}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
