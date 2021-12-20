import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { TEdges } from '../../utils/constants'

interface IExpandIconButtonProps {
  edge?: TEdges
  expand: boolean
  onClick: () => void
}

interface IExpandedIconProps {
  expand: boolean
}

export const ExpandIcons: React.FC<IExpandedIconProps> = ({ expand }) => (
  <>
    {expand ? (
      <KeyboardArrowUpRoundedIcon fontSize="small" />
    ) : (
      <KeyboardArrowDownRoundedIcon fontSize="small" />
    )}
  </>
)

export const ExpandIconButton: React.FC<IExpandIconButtonProps> = ({
  edge,
  expand,
  onClick,
}) => (
  <IconButton size="small" edge={edge} color="default" onClick={onClick}>
    <ExpandIcons expand={expand} />
  </IconButton>
)
