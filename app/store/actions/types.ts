export enum ActionType {
  NAVIGATION = 'NAVIGATION'
}

export enum NavigationActionType {
  SET_CURRENT_PATH = 'SET_CURRENT_PATH',
  SET_IS_USER_SIGNED_IN = 'SET_IS_USER_SIGNED_IN'
}

export enum AuthenticationActionType {
  AUTHORISE_USER = 'AUTHORISE_USER',
  AUTHORISE_ERROR = 'AUTHORISE_ERROR',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL'
}