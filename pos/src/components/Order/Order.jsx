import { useContext } from "react";
import { RestaurantContext } from "../../api/RestaurantProvider";
import { Button } from "../Button/Buttton";

export function Order({ id, img, name, price, count }) {
  const { orderList, setOrderList } = useContext(RestaurantContext);

  const handleRemoveDish = (id) => {
    // console.log("id", id);

    const foundDish = orderList.find((dish) => dish.id === id);
    // console.log("foundDish", foundDish);

    if (!foundDish) return;

    const { count } = foundDish;

    const updatedOrderList =
      count > 1
        ? orderList.map((dish) =>
            dish.id === id ? { ...dish, count: count - 1 } : dish
          )
        : orderList.filter((dish) => dish.id !== id);

    setOrderList(updatedOrderList);
  };

  return (
    <>
      <article className="flex justify-between gap-4">
        <div className="flex flex-col w-full gap-3">
          <header className="flex gap-2 justify-between">
            <figure className="flex gap-4 items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={img}
                alt="Spicy seasoned seafood noodles"
              />
              <figcaption>
                <h3 className="text-white w-20 md:w-36 font-barlow font-medium text-sm truncate">
                  {name}
                </h3>
                <p className="text-lighter font-medium text-sm">$ {price}</p>
              </figcaption>
            </figure>
          </header>
          <div className="flex  items-center h-12">
            <p className="text-white font-bold border-gray-light rounded-lg border bg-dark w-full h-12  flex justify-start px-4 items-center">
              <span className="text-lighter pr-4 text-xs font-medium">
                Total
              </span>
              $ {price * count}
            </p>
          </div>
        </div>
        <aside className="flex flex-col gap-3 justify-between">
          <div className="flex justify-center items-center w-12 h-12 bg-dark rounded-lg border-gray-light border">
            <p className="text-white por-alinear text-center">{count}</p>
          </div>
          <Button variant="delete" onClick={() => handleRemoveDish(id)} />
        </aside>
      </article>
    </>
  );
}
