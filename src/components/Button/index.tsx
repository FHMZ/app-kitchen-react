import { ClassNameMap } from '@mui/material'
import MuiButton, { ButtonClasses } from '@mui/material/Button'
import React from 'react'
import { TColors, TSizes } from '../../utils/constants'

type TTypes = 'button' | 'submit' | 'reset' | undefined
type TVariants = 'text' | 'outlined' | 'contained' | undefined

interface IButtonProps {
  id: string | undefined
  type?: TTypes
  className?: string
  fullWidth: boolean | undefined
  variant?: TVariants
  color?: TColors
  text: string
  onClick?: (e?: any) => any
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  classes: (Partial<ButtonClasses> & Partial<ClassNameMap<never>>) | undefined
  size?: TSizes
}

const Button: React.FC<IButtonProps> = ({
  id,
  type,
  className,
  fullWidth,
  variant,
  color,
  text,
  onClick,
  startIcon,
  endIcon,
  classes,
  size,
}) => {
  return (
    <MuiButton
      id={id}
      type={type}
      className={className}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      classes={classes}
      size={size}
    >
      {text}
    </MuiButton>
  )
}

export default Button
