import { ILoginPropsReducer } from '../models/login'
import { EKdsReducerTypes } from '../utils/enums'

interface IAppPropsAction {
  type: EKdsReducerTypes
  payload: ILoginPropsReducer
}

const setLoginStorage = (payload: any) => {
  localStorage.setItem('kds_st_props', JSON.stringify(payload))
}

export const getLoginStoraged = (): ILoginPropsReducer => {
  const loginJson = localStorage.getItem('kds_st_props')
  return loginJson !== null ? JSON.parse(loginJson) : undefined
}

export const loginReducer = (
  state: ILoginPropsReducer,
  action: IAppPropsAction
) => {
  switch (action.type) {
    case EKdsReducerTypes.Login:
      setLoginStorage(action.payload)
      return {
        ...state,
        storeId: action.payload.storeId,
        stationId: action.payload.stationId,
        profile: action.payload.profile,
      }
    case EKdsReducerTypes.Station:
      setLoginStorage(action.payload)
      return {
        ...state,
        stationId: action.payload.stationId,
        profile: action.payload.profile,
      }
    default:
      const stored = getLoginStoraged();
      return {
        ...state,
        storeId: stored.storeId,
        stationId: stored.stationId,
        profile: stored.profile,
      }
  }
}
