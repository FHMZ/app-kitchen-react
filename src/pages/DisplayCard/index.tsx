import { Grid } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import OrderLayout from '../../layouts/DisplayOrder'
import { IOrderCardView } from '../../models/order'
import { TWENTY_SECONDS } from '../../utils/constants'
import OrderCard from './components/Card'

const DisplayCard: React.FC = () => {
  const [orders, setOrders] = useState<IOrderCardView[]>([])

  // todo: exportar em uma só função
  const handleTwentySecondsReq = useCallback(() => {
    const twentySeconds = setInterval(() => {
      console.log('Request Order')
    }, TWENTY_SECONDS)
    return () => clearInterval(twentySeconds)
  }, [])

  useEffect(() => handleTwentySecondsReq())

  useEffect(() => {
    const res = require('../../assets/mocks/orders.json')
    res && setOrders(res)
  }, [])

  return (
    <OrderLayout>
      <Grid container spacing={1}>
        {orders.map((order, i) => (
          <OrderCard key={i} order={order} />
        ))}
      </Grid>
    </OrderLayout>
  )
}

export default DisplayCard
