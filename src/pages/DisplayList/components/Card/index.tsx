import { Box } from '@mui/material'
import MuiCardActionArea from '@mui/material/CardActionArea'
import React, { useEffect, useState } from 'react'
import { CardBorderColor } from '../../../../components/Card'
import { CardTbCell } from '../../../../components/CardTb'
import Grid from '../../../../components/Grid'
import { useOrderCardList } from '../../../../hooks/Order'
import { IOrderListView } from '../../../../models/order'
import { EStatus, EStatusId } from '../../../../utils/enums'
import { StyledCardList } from './style'

interface ICardListProps {
  item: IOrderListView
}

interface ICardActionAreaProps {
  onClick?: () => void
  color?: string
  children: React.ReactNode
}

const CardList: React.FC<ICardActionAreaProps> = ({
  onClick,
  color,
  children,
}) => (
  <Box marginBottom={0.5}>
    <StyledCardList color={color} onClick={onClick}>
      <MuiCardActionArea>{children}</MuiCardActionArea>
    </StyledCardList>
  </Box>
)

const OrderCardList: React.FC<ICardListProps> = ({ item }) => {
  const {
    isDelivery,
    bgColor,
    onBgColorChange,
    orderStatusId,
    onStatusIdChange,
    formOrderItem,
    onFormChange,
  } = useOrderCardList(item)

  const [isUpdatingForm, setIsUpdatingForm] = useState(false)

  useEffect(() => {
    isUpdatingForm && console.log(formOrderItem)
  }, [formOrderItem, isUpdatingForm])

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
    <CardList color={bgColor} onClick={handleOrderChange}>
      <CardBorderColor delivery={isDelivery}>
        <Grid container>
          <CardTbCell text={String(item.sequentialOrder)} sm={0.5} />
          <CardTbCell text={String(item.orderNumber)} sm={2} />
          <CardTbCell text={String(item.preparationTime)} sm={1} />
          <CardTbCell text={String(item.preparationTimeItem)} sm={1} />
          <CardTbCell text={''} sm={1} />
          <CardTbCell text={String(item.quantity)} sm={0.5} />
          <CardTbCell text={item.descriptionItem} sm={3} />
          <CardTbCell text={item.modifiers} sm={3} />
        </Grid>
      </CardBorderColor>
    </CardList>
  )
}

export default OrderCardList
