import { INCREMENT, DECREMENT, CARTITEMS } from "./CartAction";

const initialstate = {
  price: 0,
  qty: 0,
  items: [],
};
const Cartreducer = (state = initialstate, action) => {
  switch (action.type) {
    case CARTITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        qty: state.qty + 1,
      };
    case DECREMENT:
      return {
        ...state,
        qty: state.qty - 1,
      };
    default:
      return state;
  }
};

export default Cartreducer;
