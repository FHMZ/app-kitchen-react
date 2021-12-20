import { IStatus } from './status'

export interface IAllDayItem {
  id: number
  description: string
  quantity: number
  stationId: number
  storeId: number
}

export interface IOrderItem {
  id: number
  itemId: number
  subItemId: number
  description: string
  quantity: number
  status: IStatus
  complementItemList: IComplementItem[]
  subItemList: ISubItem[]
  observation: string
}

export interface IComplementItem {
  id: number
  complementItemId: number
  description: string
}

export interface ISubItem {
  id: number
  subItemId: number
  description: string
}
