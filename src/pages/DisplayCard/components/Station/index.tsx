import React from 'react'
import { IStation } from '../../../../models/station'
import { EStatusId } from '../../../../utils/enums'
import {
  Container,
  StyledBrightness1Icon,
  StyledPanoramaFishEyeRoundedIcon,
  StyledRemoveRoundedIcon,
} from './style'

interface IStationIconProps {
  stations: IStation[]
}

interface IIconProps {
  station: IStation
}

const MuiIcon: React.FC<IIconProps> = ({ station }) => {
  const isStatusPending = station.statusId === EStatusId.PENDING
  const isStatusDoingOrDone =
    station.statusId === EStatusId.DOING || station.statusId === EStatusId.DONE

  let Icon = <StyledBrightness1Icon />

  if (isStatusPending) {
    Icon = <StyledRemoveRoundedIcon />
  } else if (isStatusDoingOrDone) {
    Icon = <StyledPanoramaFishEyeRoundedIcon />
  }

  return Icon
}

const StationIcon: React.FC<IStationIconProps> = ({ stations }) => (
  <>
    {stations.map((item, i) => (
      <Container key={i}>
        <MuiIcon station={item} />
      </Container>
    ))}
  </>
)

export default StationIcon
