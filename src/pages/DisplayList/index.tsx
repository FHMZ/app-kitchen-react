import React, { useCallback, useEffect, useState } from 'react'
import { CardTh, CardThCell } from '../../components/CardTb'
import { GridContainer } from '../../components/Grid'
import OrderLayout from '../../layouts/DisplayOrder'
import { IOrderListView } from '../../models/order'
import { TWENTY_SECONDS } from '../../utils/constants'
import OrderCardList from './components/Card'

const DisplayList: React.FC = () => {
  const [orderItems, setOrderItems] = useState<IOrderListView[]>([])

  // todo: exportar em uma só função
  const handleTwentySecondsReq = useCallback(() => {
    const twentySeconds = setInterval(() => {
      console.log('Request Order')
    }, TWENTY_SECONDS)
    return () => clearInterval(twentySeconds)
  }, [])

  useEffect(() => handleTwentySecondsReq())

  useEffect(() => {
    const res = require('../../assets/mocks/orderList.json')
    res && setOrderItems(res)
  }, [])

  return (
    <OrderLayout>
      <GridContainer>
        <CardTh>
          <CardThCell text="#" sm={0.5} />
          <CardThCell text="Pedido" sm={2} />
          <CardThCell text="Tempo" sm={1} />
          <CardThCell text="Te. Total" sm={1} />
          <CardThCell text="Attn" sm={1} />
          <CardThCell text="Qtd" sm={0.5} />
          <CardThCell text="Item" sm={3} />
          <CardThCell text="Modificadores" sm={3} />
        </CardTh>
        {orderItems.map((item, i) => (
          <OrderCardList key={i} item={item} />
        ))}
      </GridContainer>
    </OrderLayout>
  )
}

export default DisplayList
