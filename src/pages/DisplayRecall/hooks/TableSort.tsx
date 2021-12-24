import { useState } from 'react'
import { IRecall } from '../../../models/recall'

export const useRecall = (recallOrders: IRecall[]) => {
  const [isIncreasing, setIsIncreasing] = useState(true)
  
  const handleIncreasing = () => setIsIncreasing(!isIncreasing)

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

  const onSortByKey = (key: string) => {
    if (isIncreasing) {
      recallOrders.sort((a, b) => handleSortAsc(a, b, key))
    } else {
      recallOrders.sort((a, b) => handleSortDesc(a, b, key))
    }
    handleIncreasing()
  }

  return { onSortByKey }
}
