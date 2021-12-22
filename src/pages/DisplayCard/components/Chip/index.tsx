import React from 'react'
import { StyledChip } from './style'

interface IChipProps {
  color?: any
  label: string
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  avatar?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

const ChipMedium: React.FC<IChipProps> = ({ color, label, icon, avatar }) => (
  <StyledChip
    size="small"
    color={color}
    icon={icon}
    label={label}
    avatar={avatar}
  />
)

export default ChipMedium
