import PropTypes from "prop-types";
import { useContext } from "react";
import { RestaurantContext } from "../../api/RestaurantProvider";

const Link = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick(text==="All" ? "" : text)} className="text-white text-nowrap snap-center w-full text-center pb-3 font-barlow font-semibold text-sm border-b-transparent border-b-2 focus:text-pink focus:border-b-2 focus:border-pink">
      {text}
    </button>
  );
};

export function NavBar() {
  const {dispatch} = useContext(RestaurantContext);

  const handleFilterDishes = (category) => {
    dispatch({ type: "GET_DISHES", payload: category });
  };

  return (
    <nav>
      <ul className="flex gap-4 border-b overflow-x-scroll scrollbar-hide w-full border-gray-light">
        <Link onClick={handleFilterDishes} text="All" />
        <Link onClick={handleFilterDishes} text="Hot Dishes" />
        <Link onClick={handleFilterDishes} text="Cold Dishes" />
        <Link onClick={handleFilterDishes} text="Soup" />
        <Link onClick={handleFilterDishes} text="Grill" />
        <Link onClick={handleFilterDishes} text="Appetizer" />
        <Link onClick={handleFilterDishes} text="Dessert" />
      </ul>
    </nav>
  );
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
};