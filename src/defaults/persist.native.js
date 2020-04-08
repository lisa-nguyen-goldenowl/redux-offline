// @flow

// $FlowIgnore
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage'; // eslint-disable-line

export default (store: any, options: {}, callback: any) =>
  persistStore(store, { storage: AsyncStorage, ...options }, callback);
