import { ReduxState } from '../../types/store';

export const selectAuth = (state: ReduxState) => state.auth;
export const selectAuthTokens = (state: ReduxState) => state.auth.tokens;
