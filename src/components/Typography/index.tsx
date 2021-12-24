import React from 'react'
import { TVariants } from '../../utils/constants'
import { GridCenter } from '../Grid'
import { StyledTypography } from './style'

interface TypographyProps {
  variant?: TVariants
  component?: any
  color?: string
  text?: string
}

interface ITypographyCenterProps {
  p?: number
  text: string
  variant?: TVariants
}

export const TypographyBold: React.FC<TypographyProps> = ({
  variant,
  color,
  text,
}) => (
  <StyledTypography bold={true} variant={variant} color={color}>
    {text}
  </StyledTypography>
)

export const TypographyBoldCenter: React.FC<ITypographyCenterProps> = ({
  p,
  text,
  variant,
}) => (
  <GridCenter p={p}>
    <TypographyBold variant={variant} text={text} />
  </GridCenter>
)
