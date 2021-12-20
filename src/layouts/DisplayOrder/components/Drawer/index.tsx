import Drawer from '@mui/material/Drawer'
import React, { useEffect, useState } from 'react'
import { MenuList } from '../../../../components/List'
import MenuListItem from '../../../../components/ListItem'
import { IAllDayItem } from '../../../../models/item'
import { BOX_SHADOW, DRAWER_WIDTH } from '../../../../utils/constants'

interface IDrawerProps {
  open: boolean
}

export const AllDayDrawer: React.FC<IDrawerProps> = ({ open }) => {
  const [allDayitems, setAllDayItems] = useState<IAllDayItem[]>([])

  useEffect(() => {
    const res = require('../../../../assets/mocks/allDayItems.json')
    if (res) setAllDayItems(res)
  }, [])

  return (
    <Drawer
      anchor="right"
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxShadow: BOX_SHADOW,
        },
      }}
      variant="persistent"
    >
      <MenuList dense={true} subHeaderText="All Day:">
        {allDayitems.map((item, i) => (
          <MenuListItem
            key={i}
            quantity={item.quantity}
            primary={item.description}
          />
        ))}
      </MenuList>
    </Drawer>
  )
}
