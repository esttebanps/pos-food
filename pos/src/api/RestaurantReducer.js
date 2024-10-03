import { DishCrud } from "./DishCrud.js"
import { OrderCrud } from "./OrderCrud.js"


export const RestaurantReducer = (state, action) => {
    switch (action.type) {
        case "GET_DISHES":
            return {...state, dishes: DishCrud.getDishes(action.payload)};
        case "CREATE_DISH":
            return {...state, dishes: DishCrud.createDish(action.payload)};
        case "UPDATE_DISH":
            return {...state, dishes: DishCrud.updateDish(action.payload.id, action.payload.updateDish)};
        case "GET_ORDERS":
            return {...state, orders: OrderCrud.getOrders()};
        // case "CREATE_ORDER":
        //     return {...state, orders: OrderCrud.createOrder(action.payload)};
        case "UPDATE_ORDER":
            return {...state, orders: OrderCrud.updateOrder(action.payload.id, action.payload.updateOrder)};
        default:
            return state;
    }
}