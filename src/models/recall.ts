import { IEntryType } from './entryType'
import { IComplementItem, ISubItem } from './item'
import { IStatus } from './status'

export interface IRecall {
  id: number
  referenceOrder?: number
  orderNumber: number
  entryType: IEntryType
  orderTime: string
  server: string // waiter
  orderCount: string
  itemList: IRecallItem[]
  remainingPreparationTime: string
  concatenatedShortDescription: string
  status: IStatus
}

export interface IRecallItem {
  id: number
  itemId: number
  subItemId: number
  complementId: number
  description: string
  quantity: string
  status: IStatus
  complementItemList: IComplementItem[]
  subItemList: ISubItem[]
  observation: string
}
