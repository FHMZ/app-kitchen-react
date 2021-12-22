import React from 'react'
import { IComplementItem, ISubItem } from '../../models/item'
import { TypographyBold } from '../Typography'
import { StyledQuantityLabel, StyledTypography } from './style'

interface ISubItemProps {
  orderItems: ISubItem[]
}

interface IComplementItemProps {
  orderItems: IComplementItem[]
}

interface IObservationProps {
  observation: string
}

interface IQuantityLabelProps {
  quantity: React.ReactNode
}

export const SubItemListItem: React.FC<ISubItemProps> = ({ orderItems }) => (
  <>
    {orderItems !== undefined &&
      orderItems.map((subItem, i) => (
        <StyledTypography key={i} variant="button">
          {subItem.description}
        </StyledTypography>
      ))}
  </>
)

export const ComplementListItem: React.FC<IComplementItemProps> = ({
  orderItems,
}) => (
  <>
    {orderItems !== undefined &&
      orderItems.map((subItem, i) => (
        <StyledTypography key={i} variant="button">
          {subItem.description}
        </StyledTypography>
      ))}
  </>
)

export const ObservationLabel: React.FC<IObservationProps> = ({
  observation,
}) => (
  <>
    {observation !== undefined && (
      <StyledTypography variant="button">{observation}</StyledTypography>
    )}
  </>
)

export const QuantityLabel: React.FC<IQuantityLabelProps> = ({ quantity }) => (
  <>
    {quantity !== undefined && (
      <StyledQuantityLabel>
        <TypographyBold text={`${quantity}`} variant="body2" />
      </StyledQuantityLabel>
    )}
  </>
)
