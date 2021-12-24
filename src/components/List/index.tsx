import { Collapse } from '@mui/material'
import Container from '@mui/material/Box'
import MuiList from '@mui/material/List'
import React from 'react'
import { TypographyBold } from '../Typography'
import { StyledList, StyledSubheaderTitle } from './style'

interface IListProps {
  marginTop?: number
  children: React.ReactNode
  dense?: boolean
  subHeaderText?: string
}

interface IListCollapseProps {
  children: React.ReactNode
  expand: boolean
}

interface ISubheaderTitleProps {
  text?: string
}

export const ListCollapse: React.FC<IListCollapseProps> = ({
  expand,
  children,
}) => (
  <Collapse in={expand} timeout="auto" unmountOnExit>
    <StyledList disablePadding>{children}</StyledList>
  </Collapse>
)

const SubheaderTitle: React.FC<ISubheaderTitleProps> = ({ text }) => (
  <StyledSubheaderTitle>
    <TypographyBold variant="subtitle2" text={text} />
  </StyledSubheaderTitle>
)

export const MenuList: React.FC<IListProps> = ({ dense, subHeaderText, children }) => (
  <Container role="presentation">
    <MuiList dense={dense} subheader={<SubheaderTitle text={subHeaderText} />}>
      {children}
    </MuiList>
  </Container>
)