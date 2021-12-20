import React from 'react'
import { StyledBorderColor } from './style'

interface ICardBorderProps {
  delivery: boolean
  children: React.ReactNode
}

export const CardBorderColor: React.FC<ICardBorderProps> = ({
  delivery,
  children,
}) => <StyledBorderColor delivery={delivery}>{children}</StyledBorderColor>
