import { IFormOrderCardListView, IFormOrderCardView } from '../models/order'
import { TOrderStatus } from '../utils/constants'
import { EStatus, EStatusId } from '../utils/enums'

interface IFormOrderCardAction {
  type: TOrderStatus
  payload?: IFormOrderCardView
}

interface IFormOrderCardListAction {
  type: TOrderStatus
  payload?: IFormOrderCardListView
}

export const formOrderReducer = (
  state: IFormOrderCardView,
  action: IFormOrderCardAction
) => {
  switch (action.type) {
    case EStatus.PENDING:
      return {
        ...state,
        statusId: EStatusId.DOING,
      }
    case EStatus.DOING || EStatus.LATE || EStatus.ALMOST_DONE:
      return {
        ...state,
        statusId: EStatusId.DONE,
      }
    default:
      return state
  }
}

export const formOrderCardListReducer = (
  state: IFormOrderCardListView,
  action: IFormOrderCardListAction
) => {
  switch (action.type) {
    case EStatus.PENDING:
      return {
        ...state,
        orderItemStatusId: EStatusId.DOING,
      }
    case EStatus.DOING || EStatus.LATE || EStatus.ALMOST_DONE:
      return {
        ...state,
        orderItemStatusId: EStatusId.DONE,
      }
    default:
      return state
  }
}
