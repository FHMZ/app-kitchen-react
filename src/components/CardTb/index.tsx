import { Box } from '@mui/material'
import React from 'react'
import Grid, { GridFlexEnd, GridFlexStart } from '../../components/Grid'
import { ExpandIconButton } from '../IconButton'
import { TypographyBold } from '../Typography'
import { CardThSorteableIconButton } from './IconButton'
import { StyledCard } from './style'

interface ICardTbProps {
  onClick?: () => void
  color?: string
  children: React.ReactNode
}

interface ICardCellProps {
  text: string
  sm: number
  color?: string
}

interface ICardThProps {
  children: React.ReactNode
}

interface ICardThSorteableCellProps {
  onClick: (sortKey?: string) => any
  text?: string
  sm: number
}

interface ICardTbButtonCellProps {
  onClick: (key?: string) => any
  expand: boolean
  sm: number
}

export const CardTb: React.FC<ICardTbProps> = ({
  onClick,
  color,
  children,
}) => (
  <Box marginBottom={0.5}>
    <StyledCard color={color} onClick={onClick}>
      {children}
    </StyledCard>
  </Box>
)

export const CardTbCell: React.FC<ICardCellProps> = ({ text, color, sm }) => (
  <GridFlexStart sm={sm}>
    <Box margin={0.5}>
      <TypographyBold variant="subtitle2" text={text} color={color} />
    </Box>
  </GridFlexStart>
)

export const CardTbButtonCell: React.FC<ICardTbButtonCellProps> = ({
  onClick,
  expand,
  sm,
}) => (
  <GridFlexEnd sm={sm}>
    <Box margin={0.5}>
      <ExpandIconButton expand={expand} onClick={onClick} />
    </Box>
  </GridFlexEnd>
)

export const CardTh: React.FC<ICardThProps> = ({ children }) => (
  <Box marginTop={0.5} marginBottom={0.5}>
    <Grid container>{children}</Grid>
  </Box>
)

export const CardThCell: React.FC<ICardCellProps> = ({ text, sm }) => (
  <CardTbCell text={text} sm={sm} color="#fff" />
)

export const CardThSorteableCell: React.FC<ICardThSorteableCellProps> = ({
  onClick,
  text,
  sm,
}) => (
  <Grid item sm={sm}>
    <Box marginLeft={0.5}>
      <Grid container>
        <TypographyBold variant="subtitle2" text={text} color="#fff" />
        <CardThSorteableIconButton onClick={onClick} />
      </Grid>
    </Box>
  </Grid>
)
