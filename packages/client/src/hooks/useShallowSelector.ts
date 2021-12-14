import { shallowEqual, useSelector } from 'react-redux';
import { ReduxState } from '../types/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useShallowSelector = <T extends (state: ReduxState) => any>(selector: T):
ReturnType<T> => useSelector(selector, shallowEqual);

export { useShallowSelector };
