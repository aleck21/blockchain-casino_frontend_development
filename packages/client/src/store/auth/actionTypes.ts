export enum AuthActionType {
  Ready = 'AUTH.READY',
  SetTokens = 'AUTH.SET_TOKENS',
  SetState = 'AUTH.SET_STATE',
  Logout = 'AUTH.LOGOUT',
  Refresh = 'AUTH.REFRESH',

  LoginEmail = 'AUTH.LOGIN_EMAIL',
  LoginMetamask = 'AUTH.LOGIN_METAMASK',
  LoginGoogle = 'AUTH.LOGIN_GOOGLE',

  SignUpEmail = 'AUTH.SIGN_UP_EMAIL',

  RequestPasswordRecovery = 'AUTH.REQUEST_PASSWORD_RECOVERY',
}
