import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import React from 'react'
import { TEdges } from '../../utils/constants'
import { StyledExpand } from './style'

interface IExpandIconButtonProps {
  edge?: TEdges
  clickIn: boolean
  onClick: () => void
}

export const ExpandIconButtonSmall: React.FC<IExpandIconButtonProps> = ({
  edge,
  clickIn,
  onClick,
}) => (
  <StyledExpand
    size="small"
    clickIn={clickIn}
    edge={edge}
    color="default"
    onClick={onClick}
  >
    <KeyboardArrowDownIcon fontSize="small" />
  </StyledExpand>
)
