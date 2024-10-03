import { Button } from "../Button/Buttton";
import { useContext, useMemo } from "react";
import { RestaurantContext } from "../../api/RestaurantProvider";

const MostOrderedItem = ({img, name, count}) => {
  return (
    <div className="flex items-center w-fit gap-4 py-4">
      <figure>
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={img}
          alt="Spicy seasoned seafood noodles"
        />
      </figure>
      <div>
        <p className="text-white font-barlow font-medium text-sm">
          {name}
        </p>
        <p className="text-light font-medium text-sm">{count} dishes ordered</p>
      </div>
    </div>
  );
};

export function MostOrdered() {
  const { state } = useContext(RestaurantContext);

  const mostOrderedDishes = useMemo(() => {
    // Objeto para almacenar el recuento total de cada plato
    const dishCounts = {};

    // Recorrer todas las órdenes y contar los platos
    state.orders.forEach(order => {
      order.dishes.forEach(dish => {
        if (dishCounts[dish.id]) {
          dishCounts[dish.id] += dish.count;
        } else {
          dishCounts[dish.id] = dish.count;
        }
      });
    });

    // Crear un array con los platos y sus conteos
    const sortedDishes = state.dishes.map(dish => ({
      ...dish,
      count: dishCounts[dish.id] || 0
    }));

    // Ordenar los platos por cantidad vendida, de mayor a menor
    return sortedDishes
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [state.orders, state.dishes]);

  return (
    <div className="bg-black flex flex-col md:overflow-y-scroll md:scrollbar-custom scrollbar-hide  justify-start h-fit rounded-[8px] px-6 pb-6 my-6">
      <p className="text-white font-barlow pt-[39px] pb-4 border-b border-b-gray-light font-semibold text-xl">
        Most Ordered
      </p>
      <div className="flex flex-col justify-between gap-4 md:overflow-y-scroll md:scrollbar-custom scrollbar-hide">
        
        {mostOrderedDishes.map((dish) => (
          <MostOrderedItem key={dish.id} img={dish.image} name={dish.name} count={dish.count} />
        ))}

      </div>
    </div>
  );
}
