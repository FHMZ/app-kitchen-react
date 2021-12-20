import AlarmOnIcon from '@mui/icons-material/AlarmOnRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecordRounded'
import RemoveIcon from '@mui/icons-material/RemoveRounded'
import React from 'react'
import ListItem from '../../../../components/ListItem'
import {
  ComplementListItem,
  ObservationLabel,
  SubItemListItem
} from '../../../../components/OrderTypography'
import { IOrderItem } from '../../../../models/item'
import { EStatusId } from '../../../../utils/enums'

interface ICardListItemProps {
  item: IOrderItem
}

const CardListItem: React.FC<ICardListItemProps> = ({ item }) => {
  const StationStatusIcon = () => {
    const statusId = item.status.id
    let StatusIcon = <AlarmOnIcon fontSize="small" />
    if (statusId === EStatusId.DOING) {
      StatusIcon = <RemoveIcon fontSize="small" />
    } else if (statusId === EStatusId.DONE) {
      StatusIcon = <FiberManualRecordIcon fontSize="small" />
    } else if (statusId === EStatusId.PENDING) {
      StatusIcon = <ArrowForwardIcon fontSize="small" />
    }
    return StatusIcon
  }

  return (
    <ListItem
      quantity={item.quantity}
      primary={item.description}
      icon={<StationStatusIcon />}
      secondary={
        <>
          <ComplementListItem orderItems={item.complementItemList} />
          <SubItemListItem orderItems={item.subItemList} />
          <ObservationLabel observation={item.observation} />
        </>
      }
    />
  )
}

export default CardListItem
