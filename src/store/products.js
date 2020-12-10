import { getProducts } from '../api';

const FETCH_PRODUCTS_STARTED = 'products/fetchStarted';
const FETCH_PRODUCTS_SUCCESS = 'products/fetchSuccess';
const FETCH_PRODUCTS_ERROR = 'products/fetchError';

const fetchProductsStarted = () => ({
  type: FETCH_PRODUCTS_STARTED,
});

const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
}

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(fetchProductsStarted());
    getProducts().then(({ data }) => {
      dispatch(fetchProductsSuccess(data));
    });
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};
