import {
  Divider,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material'
import MuiListItemButton from '@mui/material/ListItemButton'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { ISubmenu } from '../../models/menu'
import { useLoginProvider } from '../../providers/KdsProvider'
import { ListCollapse } from '../List'
import { QuantityLabel } from '../OrderTypography'
import {
  StyledAvatar,
  StyledExpandIcon,
  StyledSubListItemButton,
} from './style'

interface IListItemButtonProps {
  role?: string
  icon?: React.ReactNode
  quantity?: React.ReactNode
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
  primary,
  expand,
}) => (
  <MuiListItemButton onClick={onClick}>
    <ListItemText primary={primary} />
    <StyledExpandIcon expand={expand} />
  </MuiListItemButton>
)

export const ListSubItemButton: React.FC<IListSubItemButtonProps> = ({
  primary,
  subMenus,
}) => {
  const { setStationId } = useLoginProvider()

  const [expand, setExpand] = useState(false)

  const history = useHistory()
  const hasSubMenu = subMenus !== undefined || subMenus !== null

  const handleExpandMenu = () => setExpand(!expand)

  const SubMenus = () => (
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
      <ListCollapse expand={expand}>{hasSubMenu && <SubMenus />}</ListCollapse>
    </>
  )
}

const ListItemButton: React.FC<IListItemButtonProps> = ({
  role,
  icon,
  avatar,
  quantity,
  primary,
  secondary,
  onClick,
  secondaryAction,
  dividerTop,
  dividerBottom,
}) => {
  const Icon = () => (
    <>{icon !== undefined && <ListItemIcon>{icon}</ListItemIcon>}</>
  )

  const Avatar = () => (
    <>
      {avatar !== undefined && (
        <ListItemAvatar>
          <StyledAvatar>{avatar}</StyledAvatar>
        </ListItemAvatar>
      )}
    </>
  )

  const SecondaryAction = () => (
    <>
      {secondaryAction !== undefined && (
        <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
      )}
    </>
  )

  return (
    <>
      {dividerTop && <Divider />}
      <MuiListItemButton onClick={onClick} role={role}>
        <Icon />
        <QuantityLabel quantity={quantity} />
        <Avatar />
        <ListItemText primary={primary} secondary={secondary} />
        <SecondaryAction />
      </MuiListItemButton>
      {dividerBottom && <Divider />}
    </>
  )
}

export default ListItemButton
