import { useState, useEffect, useReducer } from 'react'
import { IRecall } from '../../../models/recall'
import { EOrderRecallTypes } from '../../../utils/enums'

const handleSortAsc = (el1: any, el2: any, key: string) => {
  if (el1[key] > el2[key]) return 1
  if (el1[key] < el2[key]) return -1
  return 0
}

const handleSortDesc = (el1: any, el2: any, key: string) => {
  if (el2[key] > el1[key]) return 1
  if (el2[key] < el1[key]) return -1
  return 0
}

interface IOrderRecallReducer {
  sortedOrderRecalls: IRecall[]
  key: string
}

interface IOrderRecallAction {
  type: EOrderRecallTypes
  payload: IOrderRecallReducer
}

const recallReducer = (state: IRecall[], action: IOrderRecallAction) => {
  switch (action.type) {
    case EOrderRecallTypes.SORT_ASC:
      return {
        ...state,
        sortedOrderRecalls: action.payload.sortedOrderRecalls.sort((a, b) =>
          handleSortAsc(a, b, action.payload.key)
        ),
      }
    case EOrderRecallTypes.SORT_DESC:
      return {
        ...state,
        sortedOrderRecalls: action.payload.sortedOrderRecalls.sort((a, b) =>
          handleSortDesc(a, b, action.payload.key)
        ),
      }
    default:
      return state
  }
}

export const useRecall = () => {
  const [isIncreasing, setIsIncreasing] = useState(true)
  const [recallOrders, setRecallOrders] = useState<IRecall[]>([])

  useEffect(() => {
    const res = require('../../../assets/mocks/orderRecalls.json')
    res && setRecallOrders(res)
  }, [])

  const [state, dispatch] = useReducer(recallReducer, recallOrders)

  const handleIncreasing = () => setIsIncreasing(!isIncreasing)

  // const handleSortAsc = (el1: any, el2: any, key: string) => {
  //   if (el1[key] > el2[key]) return 1
  //   if (el1[key] < el2[key]) return -1
  //   return 0
  // }

  // const handleSortDesc = (el1: any, el2: any, key: string) => {
  //   if (el2[key] > el1[key]) return 1
  //   if (el2[key] < el1[key]) return -1
  //   return 0
  // }

  const onSortByKey = (key: string) => {
    if (isIncreasing) {
      // recallOrders.sort((a, b) => handleSortAsc(a, b, key))
      dispatch({
        type: EOrderRecallTypes.SORT_ASC,
        payload: {
          sortedOrderRecalls: recallOrders,
          key: key,
        },
      })
    } else {
      // recallOrders.sort((a, b) => handleSortDesc(a, b, key))
      dispatch({
        type: EOrderRecallTypes.SORT_DESC,
        payload: {
          sortedOrderRecalls: recallOrders,
          key: key,
        },
      })
    }
    handleIncreasing()
  }

  return { recallOrders, state, onSortByKey }
}
