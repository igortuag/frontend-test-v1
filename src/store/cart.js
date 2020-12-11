const ADD_PRODUCT_CART = 'cart/addProduct';

const addProduct = () => ({
  type: ADD_PRODUCT_CART,
});

const initialState = {
  products: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        products: state.products + 1,
      };
    default:
      return state;
  }
}

export const addProductCart = () => dispatch => {
  dispatch(addProduct());
};
