export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_ONE_FROME_BASKET":
      //THIS WILL REMOVE ALL ITEMS WITH SAME ID.
      // return {
      //   ...state,
      //   basket: state.basket.filter((item) => item.id !== action.id),
      // };
      //THIS WILL NOT REMOVE ALL SAME ID ITEMS INSTEAD IT WILL REMOVE THE PARTICULAR ITEM.
      const index = state.basket.findIndex(
        (basketIem) => basketIem.id === action.id
      );
      let newBasket = [...state.basket];

      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `Can't remove product (id: ${action.id})  as it's not in basket!`
          );

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
