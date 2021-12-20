import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react'
import { ILoginPropsReducer } from '../models/login'
import { IProfile } from '../models/profile'
import { getLoginStoraged, loginReducer } from '../reducers/LoginReducer'
import { EKdsReducerTypes } from '../utils/enums'

interface ILoginContext {
  login: ILoginPropsReducer
  setKdsProps: (storeId: number, stationId: number, profile: IProfile) => void
  setStationId: (stationId: number) => void
}

const KdsContext = createContext({} as ILoginContext)

const storedLogin = getLoginStoraged()
export const useLoginProvider = () => useContext(KdsContext)

const KdsProvider: React.FC = ({ children }) => {
  const [login, loginDispatch] = useReducer(loginReducer, {
    storeId: storedLogin.storeId,
    stationId: storedLogin.stationId,
    profile: storedLogin.profile,
  })

  const setKdsProps = useCallback(
    (storeId: number, stationId: number, profile: IProfile) => {
      loginDispatch({
        type: EKdsReducerTypes.Login,
        payload: {
          storeId: storeId,
          stationId: stationId,
          profile: profile,
        },
      })
    },
    []
  )

  const setStationId = useCallback(
    (stationId: number) => {
      loginDispatch({
        type: EKdsReducerTypes.Station,
        payload: {
          storeId: login.storeId,
          stationId: stationId,
          profile: login.profile,
        },
      })
    },
    [login]
  )

  const values = {
    login,
    setKdsProps,
    setStationId,
  }

  return <KdsContext.Provider value={values}>{children}</KdsContext.Provider>
}

export default KdsProvider
