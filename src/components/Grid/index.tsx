import { GridSize } from '@mui/material'
import React from 'react'
import  MuiGrid  from '@mui/material/Grid'

type Directions = 'center' | 'flex-start' | 'flex-end'

interface IGridProps {
  xs?: boolean | GridSize
  sm?: boolean | GridSize
  md?: boolean | GridSize
  lg?: boolean | GridSize
  xl?: boolean | GridSize
  item?: boolean
  container?: boolean
  justifyContent?: Directions
  alignItems?: 'center'
  p?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  spacing?: number
  direction?: 'row'
  children: React.ReactNode
}

interface IGridCenterProps {
  p?: number
  children: React.ReactNode
}

interface IGridFlexProps {
  sm?: boolean | GridSize
  children: React.ReactNode
}

interface IContainerProps {
  children: React.ReactNode
}

export const GridCenter: React.FC<IGridCenterProps> = ({
  p,
  children,
}) => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    p={p}
  >
    {children}
  </Grid>
)

export const GridFlexEnd: React.FC<IGridFlexProps> = ({ sm, children }) => (
  <Grid
    item
    sm={sm}
    container
    direction="row"
    alignItems="center"
    justifyContent="flex-end"
  >
    {children}
  </Grid>
)

export const GridFlexStart: React.FC<IGridFlexProps> = ({ sm, children }) => (
  <Grid
    item
    sm={sm}
    container
    direction="row"
    alignItems="center"
    justifyContent="flex-start"
  >
    {children}
  </Grid>
)

export const GridContainer: React.FC<IContainerProps> = ({ children }) => (
  <Grid container>
    <Grid item xl={12} lg={12} md={12} xs={12}>
      {children}
    </Grid>
  </Grid>
)

const Grid: React.FC<IGridProps> = ({
  p,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  xs,
  sm,
  md,
  lg,
  item,
  container,
  spacing,
  direction,
  children,
  justifyContent,
  alignItems,
}) => (
  <MuiGrid
    p={p}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    item={item}
    spacing={spacing}
    direction={direction}
    container={container}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </MuiGrid>
)

export default Grid
