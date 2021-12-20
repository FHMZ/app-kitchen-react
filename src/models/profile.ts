import { IMenu } from './menu'

export interface IProfile {
  id: number
  description: string
  mainScreenUrl: string
  menuAccessList: Array<IMenu>
}
