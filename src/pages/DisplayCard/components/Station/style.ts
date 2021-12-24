import Brightness1Icon from '@mui/icons-material/Brightness1'
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import { styled } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'inline',
}))

export const StyledRemoveRoundedIcon = styled(RemoveRoundedIcon)(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
    fontSize: 10,
  })
)

export const StyledPanoramaFishEyeRoundedIcon = styled(
  PanoramaFishEyeRoundedIcon
)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: 10,
}))

export const StyledBrightness1Icon = styled(Brightness1Icon)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: 10,
}))
