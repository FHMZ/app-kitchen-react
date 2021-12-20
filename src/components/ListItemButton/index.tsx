import {
  Divider,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import MuiListItemButton from '@mui/material/ListItemButton'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ISubmenu } from '../../models/menu'
import { useLoginProvider } from '../../providers/KdsProvider'
import { ExpandIcons } from '../IconButton'
import { ListCollapse } from '../List'
import { StyledAvatar, StyledSubListItemButton } from './style'

interface IListItemButtonProps {
  role?: string
  icon?: React.ReactNode
  avatar?: React.ReactNode
  primary: React.ReactNode
  secondary?: React.ReactNode
  onClick: () => void
  onKeyDown?: () => void
  secondaryAction?: React.ReactNode
  dividerTop?: boolean
  dividerBottom?: boolean
}

interface IListItemButtonExpandProps {
  startIcon?: React.ReactNode
  onClick: () => void
  primary: string
  expand: boolean
}

interface IListSubItemButtonProps {
  primary: string
  subMenus: Array<ISubmenu>
}

export const ListItemButtonExpand: React.FC<IListItemButtonExpandProps> = ({
  onClick,
  startIcon,
  primary,
  expand,
}) => (
  <MuiListItemButton onClick={onClick}>
    {startIcon !== undefined && <ListItemIcon>{startIcon}</ListItemIcon>}
    <ListItemText primary={primary} />
    <ExpandIcons expand={expand} />
  </MuiListItemButton>
)

export const ListSubItemButton: React.FC<IListSubItemButtonProps> = ({
  primary,
  subMenus,
}) => {
  const { setStationId } = useLoginProvider()

  const [expand, setExpand] = useState(false)

  const history = useHistory()
  const isSubMenuEmpty = subMenus !== undefined || subMenus === null

  const handleExpandMenu = () => setExpand(!expand)

  const SubMenus = () => {
    return (
      <div>
        {subMenus.map((subMenu, i) => (
          <StyledSubListItemButton
            key={i}
            onClick={() => handleSubmenuClick(subMenu)}
          >
            <ListItemText primary={subMenu.description} />
          </StyledSubListItemButton>
        ))}
      </div>
    )
  }

  const handleSubmenuClick = (subMenu: ISubmenu) => {
    if (subMenu.stationId === undefined) return
    setStationId(subMenu.stationId)
    history.push(subMenu.url)
  }

  return (
    <>
      <ListItemButtonExpand
        primary={primary}
        expand={expand}
        onClick={handleExpandMenu}
      />
      <ListCollapse expand={expand}>
        {isSubMenuEmpty && <SubMenus />}
      </ListCollapse>
    </>
  )
}

const ListItemButton: React.FC<IListItemButtonProps> = ({
  role,
  icon,
  avatar,
  primary,
  secondary,
  onClick,
  secondaryAction,
  dividerTop,
  dividerBottom,
}) => {
  const hasIcon = icon !== undefined
  const hasAvatar = avatar !== undefined
  const hasSecondaryAction = secondaryAction !== undefined

  return (
    <>
      {dividerTop && <Divider />}
      <MuiListItemButton onClick={onClick} role={role}>
        {hasIcon && <ListItemIcon>{icon}</ListItemIcon>}
        {hasAvatar && (
          <ListItemAvatar>
            <StyledAvatar>{avatar}</StyledAvatar>
          </ListItemAvatar>
        )}
        <ListItemText primary={primary} secondary={secondary} />
        {hasSecondaryAction && (
          <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        )}
      </MuiListItemButton>
      {dividerBottom && <Divider />}
    </>
  )
}

export default ListItemButton
