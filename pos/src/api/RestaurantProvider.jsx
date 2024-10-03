import { createContext, useReducer, useState } from "react";
import { DishCrud } from "./DishCrud";
import { OrderCrud } from "./OrderCrud";
import { RestaurantReducer } from "./RestaurantReducer";

export const RestaurantContext = createContext();

export default function RestaurantProvider({ children }) {
  const [orderList, setOrderList] = useState([]);
  const initialState = {
    dishes: DishCrud.getDishes(),
    orders: OrderCrud.getOrders(),
  };

  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  return (
    <RestaurantContext.Provider value={{ state, dispatch, orderList, setOrderList }}>
      {children}
    </RestaurantContext.Provider>
  );
}
