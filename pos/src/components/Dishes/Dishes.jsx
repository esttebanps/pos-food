import { useEffect, useContext } from "react";
import { DishCard } from "../DishCard/DishCard";
import { DishCrud } from "../../api/DishCrud";
import { RestaurantContext } from "../../api/RestaurantProvider";

// import { DishCrud } from "../DishCard/DishCard";

export function Dishes() {
  const { state, dispatch, orderList, setOrderList } = useContext(RestaurantContext);

  useEffect(() => {
    handleGetDishes();

    console.log("fetchedDishes", state.dishes);
  }, []);

  const handleGetDishes = () => {
    dispatch({ type: "GET_DISHES" });
  };

  const addDishToOrder = (dish) => {
    const item = { count: 1, ...dish };
    
    const orderFind = orderList.find((order) => order.id === dish.id);
  
    if (orderFind) {
      const updatedOrderList = orderList.map((order) => 
        order.id === dish.id ? { ...order, count: order.count + 1 } : order
      );
      setOrderList(updatedOrderList);
      // console.log("Plato actualizado:", updatedOrderList);
    } else {
      setOrderList([...orderList, item]);
      // console.log("Nuevo plato agregado:", [...orderList, item]);
    }
  };

  return (
    <div className="mx-4 py-4 overflow-y-auto scrollbar-custom snap-y scroll-smooth grid grid-cols-2 content-start justify-items-center gap-8 md:grid-cols-3">
      {state.dishes.map((dish) => (
        <div className="snap-start" key={dish.id}>
          <DishCard
            onClick={() => addDishToOrder(dish)}
            img={dish.image}
            name={dish.name}
            price={dish.price}
            quantity={dish.quantity}
          />
        </div>
      ))}
    </div>
  );
}
