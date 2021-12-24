import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestoreRounded'
import { IconButton } from '@mui/material'
import React from 'react'
import ListItem from '../../../../components/ListItem'
import {
  ListSubItem,
  ObservationLabel,
} from '../../../../components/OrderTypography'
import { IRecallItem } from '../../../../models/recall'

interface IRecallCardListItemProps {
  item: IRecallItem
}

const RecallCardListItem: React.FC<IRecallCardListItemProps> = ({ item }) => (
  <ListItem
    quantity={Number(item.quantity)}
    primary={item.description}
    secondary={
      <>
        <ListSubItem orderItems={item.complementItemList} />
        <ListSubItem orderItems={item.subItemList} />
        <ObservationLabel observation={item.observation} />
      </>
    }
    secondaryAction={
      <IconButton size="small" onClick={() => alert('Recall Ordem Item')}>
        <SettingsBackupRestoreIcon fontSize="small" />
      </IconButton>
    }
  />
)

export default RecallCardListItem
