import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded'
import React from 'react'
import { TEdges } from '../../../utils/constants'
import { StyledIconButton } from './style'

interface ICardThSorteableIconButtonProps {
  edge?: TEdges
  onClick?: () => void
}

export const CardThSorteableIconButton: React.FC<ICardThSorteableIconButtonProps> = ({
  edge,
  onClick,
}) => (
  <StyledIconButton size="small" edge={edge} onClick={onClick}>
    <ImportExportRoundedIcon fontSize="small" />
  </StyledIconButton>
)
