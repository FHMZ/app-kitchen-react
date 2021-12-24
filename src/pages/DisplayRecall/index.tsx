import React, { useEffect, useState } from 'react'
import {
  CardTh,
  CardThCell,
  CardThSorteableCell,
} from '../../components/CardTb'
import { GridContainer } from '../../components/Grid'
import OrderLayout from '../../layouts/DisplayOrder'
import { IRecall } from '../../models/recall'
import RecallCardList from './components/Card'
import { useRecall } from './hooks/TableSort'

const DisplayRecall: React.FC = () => {
  // const [recallOrders, setRecallOrders] = useState<IRecall[]>([])

  const { state, onSortByKey } = useRecall()

  // useEffect(() => {
  //   const res = require('../../assets/mocks/orderRecalls.json')
  //   res && setRecallOrders(res)
  // }, [])

  return (
    <OrderLayout>
      <GridContainer>
        <CardTh>
          <CardThSorteableCell
            text="Pedido"
            onClick={() => onSortByKey('orderNumber')}
            sm={2}
          />
          <CardThSorteableCell
            text="Horário"
            onClick={() => onSortByKey('orderNumber')}
            sm={2}
          />
          <CardThSorteableCell
            text="Servidor"
            onClick={() => onSortByKey('orderNumber')}
            sm={2}
          />
          <CardThSorteableCell
            text="Canal"
            onClick={() => onSortByKey('orderNumber')}
            sm={2}
          />
          <CardThSorteableCell
            text="Itens"
            onClick={() => onSortByKey('orderNumber')}
            sm={3}
          />
          <CardThCell text="" sm={1} />
        </CardTh>
        {state.map((order, i) => (
          <RecallCardList key={i} recallOrder={order} />
        ))}
      </GridContainer>
    </OrderLayout>
  )
}

export default DisplayRecall
