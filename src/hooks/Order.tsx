import { useCallback, useReducer, useState } from 'react'
import { IOrderCardView, IOrderListView } from '../models/order'
import { useLoginProvider } from '../providers/KdsProvider'
import {
  formOrderCardListReducer,
  formOrderReducer,
} from '../reducers/OrderReducer'
import { getStatusColor, TOrderStatus } from '../utils/constants'
import { EEntryType } from '../utils/enums'

export const useOrderCard = (order: IOrderCardView) => {
  const { login } = useLoginProvider()

  const isDelivery = order.entryType.description === EEntryType.DELIVERY
  const currentColor = getStatusColor(order.status.description)

  const [formOrder, setFormOrderDispach] = useReducer(formOrderReducer, {
    id: order.id,
    orderNumber: order.orderNumber,
    statusId: order.status.id,
    storeId: login.storeId,
  })
  const [orderStatusId, setOrderStatusId] = useState<number>(order.status.id)
  const [bgColor, setBgColor] = useState<string>(currentColor)

  const onBgColorChange = useCallback(
    (status: TOrderStatus) => setBgColor(getStatusColor(status)),
    []
  )

  const onStatusIdChange = useCallback(
    (statusId: number) => setOrderStatusId(statusId),
    []
  )

  const onFormChange = useCallback(
    (currentStatusDescription: TOrderStatus) =>
      setFormOrderDispach({ type: currentStatusDescription }),
    []
  )

  return {
    isDelivery,
    bgColor,
    onBgColorChange,
    orderStatusId,
    onStatusIdChange,
    formOrder,
    onFormChange,
  }
}

export const useOrderCardList = (orderItem: IOrderListView) => {
  const { login } = useLoginProvider()

  const isDelivery = orderItem.entryType === EEntryType.DELIVERY
  const currentColor = getStatusColor(orderItem.statusItem.description)

  const [formOrderItem, setFormOrderItemDispach] = useReducer(
    formOrderCardListReducer,
    {
      id: orderItem.id,
      orderNumber: orderItem.orderNumber,
      orderItemId: orderItem.item,
      orderItemStatusId: orderItem.statusItem.id,
      storeId: login.storeId,
    }
  )
  const [orderStatusId, setOrderStatusId] = useState<number>(
    orderItem.status.id
  )
  const [bgColor, setBgColor] = useState<string>(currentColor)

  const onBgColorChange = useCallback(
    (status: TOrderStatus) => setBgColor(getStatusColor(status)),
    []
  )

  const onStatusIdChange = useCallback(
    (statusId: number) => setOrderStatusId(statusId),
    []
  )

  const onFormChange = useCallback(
    (currentStatusDescription: TOrderStatus) =>
      setFormOrderItemDispach({ type: currentStatusDescription }),
    []
  )

  return {
    isDelivery,
    bgColor,
    onBgColorChange,
    orderStatusId,
    onStatusIdChange,
    formOrderItem,
    onFormChange,
  }
}
