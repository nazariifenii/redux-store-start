import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/cart.actions';
import {
  GET_PRODUCT_LIST
} from '../actions/products.action';

const initState = {
  inCart: [],
  products: [{
      name: 'iPhone 4s',
      price: 200,
      available: 2
    },
    {
      name: 'Nokia 2110',
      price: 600,
      available: 0
    },
    {
      name: 'Samsung s3',
      price: 345,
      available: 2
    },
    {
      name: 'LG G2',
      price: 90,
      available: 1
    },
    {
      name: 'Nokia 9930',
      price: 250,
      available: 3
    },
    {
      name: 'iPhone X',
      price: 123,
      available: 4
    },
    {
      name: 'Meizu m9',
      price: 656,
      available: 23
    },
    {
      name: 'Sonny 9',
      price: 564,
      available: 234
    },
    {
      name: 'iPhone 6 plus',
      price: 434,
      available: 7
    },
    {
      name: 'Alcatel noname',
      price: 123,
      available: 7
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state.inCart;
    case GET_PRODUCT_LIST:
      return state.products;
    case ADD_TO_CART:
      return {
        ...state,
        inCart: state.inCart.concat(action.payload)
      }
    case REMOVE_FROM_CART:
      return { ...state,
        inCart: [
          ...state.inCart.slice(0, action.productId),
          ...state.inCart.slice(action.productId + 1)
        ]
      }
    default:
      return state;
  }
}