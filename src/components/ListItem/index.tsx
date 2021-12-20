import {
  Divider,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material'
import MuiListItem from '@mui/material/ListItem'
import React from 'react'
import { TypographyBold } from '../Typography'
import { StyledAvatar, StyledListItemIcon, StyledQuantityLabel } from './style'

interface ListItemProps {
  role?: string
  icon?: React.ReactNode
  avatar?: React.ReactNode
  quantity?: number
  primary: string
  secondary?: React.ReactNode
  onClick?: () => void
  onKeyDown?: () => void
  secondaryAction?: React.ReactNode
  dividerTop?: boolean
  dividerBottom?: boolean
}

const ListItem: React.FC<ListItemProps> = ({
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
    <>{icon !== undefined && <StyledListItemIcon>{icon}</StyledListItemIcon>}</>
  )

  const QuantityLabel = () => (
    <>
      {quantity !== undefined && (
        <StyledQuantityLabel>
          <TypographyBold text={`${quantity}`} variant="button" />
        </StyledQuantityLabel>
      )}
    </>
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
      <MuiListItem onClick={onClick} role={role}>
        <Icon />
        <QuantityLabel />
        <Avatar />
        <ListItemText
          primary={<TypographyBold text={primary} variant="button" />}
          secondary={secondary}
        />
        <SecondaryAction />
      </MuiListItem>
      {dividerBottom && <Divider />}
    </>
  )
}

export default ListItem
