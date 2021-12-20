import { IProfile } from "./profile";
import { IStore } from "./store";

export interface ILoginProfile {
  id: number;
  name: string;
  store: IStore;
  profile: IProfile;
}

export interface ILoginPropsReducer {
  storeId: number
  stationId: number
  profile: IProfile
}