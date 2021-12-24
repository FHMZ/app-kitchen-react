export enum EStatus {
  PENDING = 'Pendente',
  DOING = 'Atendimento',
  LATE = 'Atrasado',
  DONE = 'Concluido',
  ALMOST_DONE = 'Quase Pronto',
}

export enum EStatusId {
  PENDING = 1,
  DOING = 2,
  DONE = 4,
  LATE = 3,
  ALMOST_DONE = 5,
}

export enum EKdsReducerTypes {
  Login = 'LOGIN',
  Station = 'STATION',
}

export enum EEntryTypeId {
  DELIVERY = 2,
}

export enum EEntryType {
  DELIVERY = 'Delivery',
}

export enum EOrderRecallTypes {
  RECALL = 'recall',
  RECALL_ITEM = 'recall_item',
  SORT_ASC = 'asc',
  SORT_DESC = 'desc',
}
