import { Drawer, styled } from '@mui/material';
import { BOX_SHADOW } from './../../../../utils/constants';

export const StyledDrawer = styled(Drawer)(() => ({
}))

export const StyledDrawerHeader = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
}))
