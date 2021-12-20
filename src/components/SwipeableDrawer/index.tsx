import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer'
import React from 'react'
import { useHistory } from 'react-router'
import { IMenu } from '../../models/menu'
import { useLoginProvider } from '../../providers/KdsProvider'
import { SWIPEABLE_DRAWER_WIDTH } from '../../utils/constants'
import { MenuList } from '../List'
import ListItemButton, { ListSubItemButton } from '../ListItemButton'

interface IMenuDrawerProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const SwipeableDrawer: React.FC<IMenuDrawerProps> = ({
  open,
  onOpen,
  onClose,
}) => {
  const { login, setStationId } = useLoginProvider()

  const history = useHistory()
  let menus = login.profile.menuAccessList

  const handleMenuClick = (menu: IMenu) => {
    if (menu.stationId === undefined) return
    setStationId(menu.stationId)
    history.push(menu.url)
  }

  const MenuListItemButton = (menu: IMenu) => (
    <>
      {menu.subMenuAccessList === undefined ? (
        <ListItemButton
          primary={menu.description}
          onClick={() => handleMenuClick(menu)}
        />
      ) : (
        <ListSubItemButton
          primary={menu.description}
          subMenus={menu.subMenuAccessList}
        />
      )}
    </>
  )

  return (
    <MuiSwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={{
        width: SWIPEABLE_DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SWIPEABLE_DRAWER_WIDTH,
        },
      }}
    >
      <MenuList>
        {menus.map((menu, i) => (
          <div key={i}>{MenuListItemButton(menu)}</div>
        ))}
      </MenuList>
    </MuiSwipeableDrawer>
  )
}

export default SwipeableDrawer
