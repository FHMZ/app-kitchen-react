import AlarmOnIcon from '@mui/icons-material/AlarmOnRounded'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecordRounded'
import RemoveIcon from '@mui/icons-material/RemoveRounded'
import React from 'react'
import { ExpandIconButtonSmall } from '../../../../components/IconButton'
import ListItem from '../../../../components/ListItem'
import {
  ListSubItem,
  ObservationLabel
} from '../../../../components/OrderTypography'
import { useSwitch } from '../../../../hooks/SwitchKey'
import { IOrderItem } from '../../../../models/item'
import { EStatusId } from '../../../../utils/enums'

interface ICardListItemProps {
  item: IOrderItem
}

const CardListItem: React.FC<ICardListItemProps> = ({ item }) => {
  const { switchKey, onSwitchKey } = useSwitch()

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
      icon={<StationStatusIcon />}
      quantity={item.quantity}
      primary={item.description}
      secondary={
        // <Collapse in={expand} unmountOnExit>
        <>
          <ListSubItem orderItems={item.complementItemList} />
          <ListSubItem orderItems={item.subItemList} />
          <ObservationLabel observation={item.observation} />
        </>
        // </Collapse>
      }
      secondaryAction={
        <ExpandIconButtonSmall edge="end" clickIn={switchKey} onClick={onSwitchKey} />
      }
    />
  )
}

export default CardListItem
