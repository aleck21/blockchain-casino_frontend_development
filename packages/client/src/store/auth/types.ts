export interface AuthRefreshResponse {
  access: string;
  refresh: string;
}

export interface AuthState {
  tokens: {
    access: string;
    refresh: string;
  },
}
