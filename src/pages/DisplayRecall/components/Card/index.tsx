import { Collapse, Grid, List } from '@mui/material'
import React, { useState } from 'react'
import {
  CardTb,
  CardTbButtonCell,
  CardTbCell,
} from '../../../../components/CardTb'
import { DividerMiddle } from '../../../../components/Divider'
import { GridContainer } from '../../../../components/Grid'
import { TypographyBoldCenter } from '../../../../components/Typography'
import { IRecall } from '../../../../models/recall'
import ListItem from '../ListItem'
import { StyledButton } from './style'

interface ICardListProps {
  recallOrder: IRecall
}

interface ICardTbCollpaseProps {
  recallOrder: IRecall
  expand: boolean
}

interface ICardBottomExpandProps {
  expand: boolean
}

const CardTbCollpase: React.FC<ICardTbCollpaseProps> = ({
  recallOrder,
  expand,
}) => {
  return (
    <CardBottomExpand expand={expand}>
      <TypographyBoldCenter p={1} text="Pedido 1" variant="body1" />
      <List dense={true}>
        {recallOrder.itemList.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </List>
      <DividerMiddle />
      <StyledButton variant="contained">Recall Pedido</StyledButton>
    </CardBottomExpand>
  )
}

const CardBottomExpand: React.FC<ICardBottomExpandProps> = ({
  expand,
  children,
}) => (
  <GridContainer>
    <Collapse in={expand} timeout="auto" unmountOnExit>
      {children}
    </Collapse>
  </GridContainer>
)

const RecallCardList: React.FC<ICardListProps> = ({ recallOrder }) => {
  const [inExpand, setInExpand] = useState(false)

  const handleExpandCard = () => setInExpand(!inExpand)

  return (
    <CardTb>
      <Grid container>
        <CardTbCell text={String(recallOrder.orderNumber)} sm={2} />
        <CardTbCell text={recallOrder.orderTime} sm={2} />
        <CardTbCell text={recallOrder.server} sm={2} />
        <CardTbCell text={recallOrder.entryType.description} sm={2} />
        <CardTbCell text={recallOrder.concatenatedShortDescription} sm={3} />
        <CardTbButtonCell expand={inExpand} onClick={handleExpandCard} sm={1} />
      </Grid>
      <CardTbCollpase expand={inExpand} recallOrder={recallOrder} />
    </CardTb>
  )
}

export default RecallCardList
