export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CARTITEMS = "CARTITEMS";

const incrementqty = () => ({
  type: INCREMENT,
});

const decrementqty = () => ({
  type: DECREMENT,
});

const items = (items) => ({
  type: CARTITEMS,
  payload: items,
});
