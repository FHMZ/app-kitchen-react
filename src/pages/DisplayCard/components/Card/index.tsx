import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectoryRounded'
import TwoWheelerIcon from '@mui/icons-material/TwoWheelerRounded'
import { CardActionArea, List, Stack, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DividerMiddle } from '../../../../components/Divider'
import Grid, { GridFlexStart } from '../../../../components/Grid'
import { useOrderCard } from '../../../../hooks/Order'
import { IOrderCardView } from '../../../../models/order'
import { EStatus, EStatusId } from '../../../../utils/enums'
import ChipMedium from '../Chip'
import CardListItem from '../ListItem'
import StationIcon from '../Station'
import {
  StyledCard,
  StyledCardActions,
  StyledCardActionsTypography,
  StyledCardContent,
  StyledCardHeader
} from './style'

interface IOrderCardProps {
  order: IOrderCardView
}

interface ICardProps {
  children: React.ReactNode
}

interface ICardHeaderProps {
  onClick: () => any
  order: IOrderCardView
  bgColor: string
}

interface ICardSubHeaderProps {
  order: IOrderCardView
  delivery: boolean
}

interface ICardActionsProps {
  order: IOrderCardView
  delivery: boolean
}

const Card: React.FC<ICardProps> = ({ children }) => (
  <Grid item xs={12} sm={12} md={6} lg={3}>
    <Zoom in={true} timeout={320}>
      <StyledCard>{children}</StyledCard>
    </Zoom>
  </Grid>
)

const CardHeader: React.FC<ICardHeaderProps> = ({
  onClick,
  order,
  bgColor,
}) => (
  <CardActionArea onClick={onClick}>
    <StyledCardHeader color={bgColor}>
      <GridFlexStart sm>
        <StyledCardActionsTypography direction="right" variant="body2">
          {`CHK${order.orderNumber}`}
        </StyledCardActionsTypography>
        <StyledCardActionsTypography direction="left" variant="body2">
          {order.remainingPreparationTimeString}
        </StyledCardActionsTypography>
      </GridFlexStart>
      <GridFlexStart sm>
        <StationIcon stations={order.stationList} />
      </GridFlexStart>
    </StyledCardHeader>
  </CardActionArea>
)

const CardSubHeader: React.FC<ICardSubHeaderProps> = ({ order, delivery }) => {
  let color = 'primary'
  let Icon = <TwoWheelerIcon fontSize="small" />
  if (!delivery) {
    color = 'success'
    Icon = <StoreMallDirectoryIcon fontSize="small" />
  }
  return (
    <Stack direction="row" spacing={0.5} margin={1} marginLeft={2}>
      <ChipMedium label={`Pedido ${order.orderCount}`} />
      <ChipMedium
        color={color}
        icon={Icon}
        label={order.entryType.description}
      />
      <ChipMedium label="Zona A" />
    </Stack>
  )
}

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
    <Card>
      <CardHeader order={order} bgColor={bgColor} onClick={handleOrderChange} />
      <CardSubHeader order={order} delivery={isDelivery} />
      <StyledCardContent>
        <List>
          {order.itemList.map((item, i) => (
            <CardListItem key={i} item={item} />
          ))}
        </List>
      </StyledCardContent>
      <DividerMiddle />
      <CardActions order={order} delivery={isDelivery} />
    </Card>
  )
}

export default OrderCard
