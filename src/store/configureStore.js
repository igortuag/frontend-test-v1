import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import products from './products';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ products });
const store = configureStore({ reducer, middleware });

export default store;
