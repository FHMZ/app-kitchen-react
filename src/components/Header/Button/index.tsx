import React from 'react'
import { StyledEndIcon, StyledHeaderButton } from './style'

interface IHeaderButtonProps {
  fullWidth?: boolean
  text: string
  onClick?: (e?: any) => any
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const HeaderButton: React.FC<IHeaderButtonProps> = ({
  fullWidth,
  text,
  onClick,
  startIcon,
  endIcon,
}) => (
  <StyledHeaderButton
    onClick={onClick}
    fullWidth={fullWidth}
    startIcon={startIcon}
    endIcon={<StyledEndIcon>{endIcon}</StyledEndIcon>}
  >
    {text}
  </StyledHeaderButton>
)
