import AlarmOnIcon from '@mui/icons-material/AlarmOnRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecordRounded'
import RemoveIcon from '@mui/icons-material/RemoveRounded'
import { Collapse } from '@mui/material'
import React, { useState } from 'react'
import {
  ExpandIconButtonSmall
} from '../../../../components/IconButton'
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
  const [expand, setExpand] = useState<boolean>(true)

  const handleExpand = () => setExpand(!expand)

  const StationStatusIcon = () => {
    const statusId = item.status.id
    let StatusIcon = <AlarmOnIcon fontSize="small" color="error" />
    if (statusId === EStatusId.DOING) {
      StatusIcon = <RemoveIcon fontSize="small" color="primary" />
    } else if (statusId === EStatusId.DONE) {
      StatusIcon = <FiberManualRecordIcon fontSize="small" color="success" />
    } else if (statusId === EStatusId.PENDING) {
      StatusIcon = <ArrowForwardIcon fontSize="small" color="secondary" />
    }
    return StatusIcon
  }

  return (
    <ListItem
      quantity={item.quantity}
      primary={item.description}
      icon={<StationStatusIcon />}
      secondary={
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <ComplementListItem orderItems={item.complementItemList} />
          <SubItemListItem orderItems={item.subItemList} />
          <ObservationLabel observation={item.observation} />
        </Collapse>
      }
      secondaryAction={
        <ExpandIconButtonSmall
          edge="end"
          expand={expand}
          onClick={handleExpand}
        />
      }
    />
  )
}

export default CardListItem
