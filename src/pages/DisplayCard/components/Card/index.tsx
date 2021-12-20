import { CardActionArea, List, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardBorderColor } from '../../../../components/Card'
import { DividerMiddle } from '../../../../components/Divider'
import Grid from '../../../../components/Grid'
import { TypographyBoldCenter } from '../../../../components/Typography'
import { useOrderCard } from '../../../../hooks/Order'
import { IOrderCardView } from '../../../../models/order'
import { EStatus, EStatusId } from '../../../../utils/enums'
import CardListItem from '../ListItem'
import StationIcon from '../Station'
import {
  StyledCard,
  StyledCardActions,
  StyledCardActionsTypography,
  StyledCardContent,
} from './style'

interface IOrderCardProps {
  order: IOrderCardView
}

interface ICardProps {
  onClick: () => void
  bgColor: string
  children: React.ReactNode
}

interface ICardActionsProps {
  order: IOrderCardView
  delivery: boolean
}

const Card: React.FC<ICardProps> = ({ onClick, bgColor, children }) => (
  <Grid item xs={12} sm={12} md={6} lg={3}>
    <Zoom in={true} timeout={320}>
      <StyledCard color={bgColor} onClick={onClick}>
        <CardActionArea>{children}</CardActionArea>
      </StyledCard>
    </Zoom>
  </Grid>
)

const CardHeader: React.FC<IOrderCardProps> = ({ order }) => (
  <>
    <Grid
      item
      container
      paddingTop={2}
      paddingRight={2}
      paddingLeft={2}
      sm
      xs={12}
    >
      <StyledCardActionsTypography direction="right" variant="subtitle2">
        {`CHK${order.orderNumber}`}
      </StyledCardActionsTypography>
      <StyledCardActionsTypography direction="left" variant="subtitle2">
        {order.remainingPreparationTimeString}
      </StyledCardActionsTypography>
    </Grid>
    <Grid
      item
      container
      paddingTop={0.5}
      paddingRight={2}
      paddingLeft={2}
      paddingBottom={0.5}
      sm
      xs={12}
    >
      <StationIcon stations={order.stationList} />
    </Grid>
  </>
)

const CardSubHeader: React.FC<IOrderCardProps> = ({ order }) => (
  <>
    <TypographyBoldCenter p={0.5} text="Zona A" variant="subtitle2" />
    <DividerMiddle />
    <TypographyBoldCenter
      p={0.5}
      text={order.entryType.description}
      variant="subtitle2"
    />
  </>
)

const CardActions: React.FC<ICardActionsProps> = ({ order, delivery }) => {
  const SecondaryActionView = () => (
    <>
      <StyledCardActionsTypography direction="right" variant="body2">
        {order.server}
      </StyledCardActionsTypography>
      <StyledCardActionsTypography direction="left" variant="body2">
        {`TBL ${order.tableAndAccount}`}
      </StyledCardActionsTypography>
    </>
  )

  return (
    <StyledCardActions>
      {delivery ? (
        <StyledCardActionsTypography direction="right" variant="body2">
          {order.entryType.description}
        </StyledCardActionsTypography>
      ) : (
        <SecondaryActionView />
      )}
    </StyledCardActions>
  )
}

const OrderCard: React.FC<IOrderCardProps> = ({ order }) => {
  const {
    isDelivery,
    bgColor,
    onBgColorChange,
    orderStatusId,
    onStatusIdChange,
    formOrder,
    onFormChange,
  } = useOrderCard(order)

  const [isUpdatingForm, setIsUpdatingForm] = useState(false)

  useEffect(() => {
    isUpdatingForm && console.log(formOrder)
  }, [formOrder, isUpdatingForm])

  const handleOrderChange = () => {
    if (orderStatusId === EStatusId.PENDING) {
      onFormChange(EStatus.PENDING)
      onBgColorChange(EStatus.DOING)
      onStatusIdChange(EStatusId.DOING)
    } else if (
      orderStatusId === EStatusId.DOING ||
      orderStatusId === EStatusId.LATE ||
      orderStatusId === EStatusId.ALMOST_DONE
    ) {
      onFormChange(EStatus.DOING)
      onBgColorChange(EStatus.DONE)
      onStatusIdChange(EStatusId.DONE)
    }
    setIsUpdatingForm(true)
  }

  return (
    <Card bgColor={bgColor} onClick={handleOrderChange}>
      <CardBorderColor delivery={isDelivery}>
        <CardHeader order={order} />
        <CardSubHeader order={order} />
        <StyledCardContent>
          <TypographyBoldCenter
            p={1}
            text={`Pedido ${order.orderCount}`}
            variant="body1"
          />
          <List dense={true}>
            {order.itemList.map((item, i) => (
              <CardListItem key={i} item={item} />
            ))}
          </List>
        </StyledCardContent>
        <DividerMiddle />
        <CardActions order={order} delivery={isDelivery} />
      </CardBorderColor>
    </Card>
  )
}

export default OrderCard
