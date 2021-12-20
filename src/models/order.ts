import { IEntryType } from './entryType'
import { IOrderItem } from './item'
import { IStation } from './station'
import { IStatus } from './status'
import { IStore } from './store'

export interface IOrderCardView {
  id: number
  orderNumber: number
  entryType: IEntryType
  orderTime: string
  server: string // waiter
  orderCount: string
  itemList: IOrderItem[]
  stationList: IStation[]
  remainingPreparationTime: string
  remainingPreparationTimeString: string
  status: IStatus
  tableAndAccount: string
}

export interface IOrderListView {
  id: number
  sequentialOrder: number
  orderNumber: number
  store: IStore
  status: IStatus
  statusItem: IStatus
  orderTime: string
  entryType: string
  server: string
  item: number
  descriptionItem: string
  quantity: number
  modifiers: string
  preparationTime: string
  preparationTimeItem: 100
  isItem: boolean
}

export interface IFormOrderCardView {
  id?: number
  orderNumber?: number
  statusId?: number
  storeId?: number
}

export interface IFormOrderCardListView {
  id: number
  orderNumber: number
  orderItemId: number
  orderItemStatusId: number
  storeId: number
}

export interface IOrderStatusColor {
  bgColor: string
}
