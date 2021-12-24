const getEnv = (variable) => {
    let windowEnv = window.env
    return !!windowEnv && windowEnv[variable] ? windowEnv[variable] : process.env[variable];
}

export const envProps = {
    baseUrl: getEnv('REACT_APP_PUBLIC_URL'),
    loginUrl: getEnv('REACT_APP_LOGIN_URL'),
    kdsCardUrl: getEnv('REACT_APP_KDS_CARD_URL'),
    kdsCardNoParamUrl: getEnv('REACT_APP_KDS_CARD_NO_PARAM_URL'),
    kdsListUrl: getEnv('REACT_APP_KDS_LIST_URL'),
    kdsListNoParamUrl: getEnv('REACT_APP_KDS_LIST_NO_PARAM_URL'),
    recallUrl: getEnv('REACT_APP_RECALL_URL'),
    healthUrl: getEnv('REACT_APP_HEALTH_URL'),
    apiTokenUrl: getEnv('REACT_APP_API_TOKEN_URL'),
    apiLoginAuthUrl: getEnv('REACT_APP_API_LOGIN_AUTH_URL'),
    apiDisasterRecoveryUrl: getEnv('REACT_APP_API_DISASTER_RECOVERY_URL'),
    apiOrderChanges: getEnv('REACT_APP_API_ORDER_CHANGES'),
    apiOrderStation: getEnv('REACT_APP_API_ORDERS_STATION'),
    apiOrderListViewStation: getEnv('REACT_APP_API_ORDERS_LIST_VIEW_STATION'),
    apiOrderGroupedItem: getEnv('REACT_APP_API_ORDERS_GROUPED_ITEM'),
    apiSaveOrder: getEnv('REACT_APP_API_SAVE_ORDER'),
    apiSaveOrderItem: getEnv('REACT_APP_API_SAVE_ORDER_ITEM'),
    apiSaveRecall: getEnv('REACT_APP_API_SAVE_RECALL'),
    apiSaveRecallItem: getEnv('REACT_APP_API_SAVE_RECALL_ITEM'),
    apiListRecall: getEnv('REACT_APP_API_LIST_RECALL'),
    apiRollbackLastItem: getEnv('REACT_APP_API_ROLLBACK_LAST_ITEM'),
    apiRecallByOrderNUmber: getEnv('REACT_APP_API_LIST_RECALL_BY_ORDER_NUMBER'),
    apiListStore: getEnv('REACT_APP_API_LIST_STORE'),
};