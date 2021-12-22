import { blue, green, orange, red, yellow } from '@mui/material/colors'
import { EStatus } from './enums'

export const SWIPEABLE_DRAWER_WIDTH = 250
export const DRAWER_WIDTH = 210
export const BOX_SHADOW =
  '0 1px 3px rgba(0, 0, 0, 0.3), 0 -1px 0px rgba(0, 0, 0, 0.02)'
export const TWENTY_SECONDS = 20000
export const ALL_DAY_KEY = 'a'
export const RECALL_KEY = 'r'

export type TVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit'

export type TSizes = 'small' | 'medium' | 'large' | undefined

export type TAlertColors = 'success' | 'info' | 'warning' | 'error'

export type TEdges = false | 'end' | 'start' | undefined

export type TOrderStatus =
  | 'Pendente'
  | 'Atendimento'
  | 'Atrasado'
  | 'Concluido'
  | 'Quase Pronto'
  | undefined

export const getStatusColor = (status: TOrderStatus) => {
  switch (status) {
    case EStatus.PENDING:
      return blue[400]
    case EStatus.DOING:
      return yellow[400]
    case EStatus.LATE:
      return red[400]
    case EStatus.ALMOST_DONE:
      return orange[400]
    case EStatus.DONE:
      return green[400]
    default:
      return blue[400]
  }
}
