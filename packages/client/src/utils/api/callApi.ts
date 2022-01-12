import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';

const portApi = 8080;
const versionApi = '/api/v1/';
const baseURL = process.env.REACT_APP_API_URL;

const apiURL = `${baseURL}:${portApi}${versionApi}`;

let accessToken: string | undefined | null;
// let refreshToken: string | undefined | null;

export function* callApi(options: {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint?: string;
  payload?: Record<string, any>;
  isUnauthorized?: boolean;
}): SagaIterator {
  const {
    method = 'GET',
    endpoint,
    payload,
  } = options;

  const url = `${apiURL}${endpoint}`;

  const body = JSON.stringify(payload);

  const requestOptions: Record<string, any> = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    credentials: 'include',
    body,
  };

  if (accessToken != null) {
    requestOptions.headers.Authorization = `Bearer ${accessToken}`;
  }

  const response: Response = yield call(fetch, url, requestOptions);

  let json: Record<string, any>;
  try {
    const unknowJson: any = yield call([response, response.json]);
    json = unknowJson;
  } catch (error) {
    json = {};
  }

  return json;
}
