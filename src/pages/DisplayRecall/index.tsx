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
import { useCardTbSorteableKey } from './hooks/TableSort'

const DisplayRecall: React.FC = () => {
  const [recallOrders, setRecallOrders] = useState<IRecall[]>([])

  useEffect(() => {
    const res = require('../../assets/mocks/orderRecalls.json')
    res && setRecallOrders(res)
  }, [])

  // todo: colocar essa funcao dentro d componente CardThSorteableCell
  const { onSortByKey } = useCardTbSorteableKey(recallOrders)
  return (
    <OrderLayout>
      <GridContainer>
        <CardTh>
          <CardThSorteableCell
            text="Pedido"
            onClick={() => onSortByKey('')}
            sm={2}
          />
          <CardThSorteableCell
            text="Horário"
            onClick={() => onSortByKey('')}
            sm={2}
          />
          <CardThSorteableCell
            text="Servidor"
            onClick={() => onSortByKey('')}
            sm={2}
          />
          <CardThSorteableCell
            text="Canal"
            onClick={() => onSortByKey('')}
            sm={2}
          />
          <CardThSorteableCell
            text="Itens"
            onClick={() => onSortByKey('')}
            sm={3}
          />
          <CardThCell text="" sm={1} />
        </CardTh>
        {recallOrders.map((order, i) => (
          <RecallCardList key={i} recallOrder={order} />
        ))}
      </GridContainer>
    </OrderLayout>
  )
}

export default DisplayRecall
