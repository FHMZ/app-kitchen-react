export interface IMenu {
  id: number
  description: string
  url: string
  stationId: number 
  subMenuAccessList: Array<ISubmenu> | undefined
}

export interface ISubmenu {
  id: number
  description: string
  url: string
  stationId: number
}
