import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import React from 'react'
import { TEdges } from '../../utils/constants'
import { StyledExpand } from './style'

interface IExpandIconButtonProps {
  edge?: TEdges
  expand: boolean
  onClick: () => void
}

export const ExpandIconButtonSmall: React.FC<IExpandIconButtonProps> = ({
  edge,
  expand,
  onClick,
}) => (
  <StyledExpand
    size="small"
    expand={expand}
    edge={edge}
    color="default"
    onClick={onClick}
  >
    <KeyboardArrowDownIcon fontSize="small" />
  </StyledExpand>
)
