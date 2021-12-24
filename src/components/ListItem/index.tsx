import { Divider, ListItemAvatar, ListItemText } from '@mui/material'
import MuiListItem from '@mui/material/ListItem'
import React from 'react'
import { QuantityLabel } from '../OrderTypography'
import { TypographyBold } from '../Typography'
import { StyledAvatar, StyledListItemIcon } from './style'

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

  const Avatar = () => (
    <>
      {avatar !== undefined && (
        <ListItemAvatar>
          <StyledAvatar>{avatar}</StyledAvatar>
        </ListItemAvatar>
      )}
    </>
  )

  return (
    <>
      {dividerTop && <Divider />}
      <MuiListItem
        onClick={onClick}
        role={role}
        secondaryAction={secondaryAction}
      >
        <Icon />
        <QuantityLabel quantity={quantity} />
        <Avatar />
        <ListItemText
          primary={<TypographyBold text={primary} variant="body2" />}
          secondary={secondary}
        />
      </MuiListItem>
      {dividerBottom && <Divider />}
    </>
  )
}

export default ListItem
