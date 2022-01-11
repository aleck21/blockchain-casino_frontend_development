export interface AuthRefreshResponse {
  access: string;
  refresh: string;
}

export interface AuthState {
  tokens: {
    access: string;
    refresh: string;
  },

  isLoginEmailLoading: boolean;
}

export type AuthLoginEmailPayload = {
  email: string;
  password: string;
};
