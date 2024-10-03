import { Button } from "../Button/Buttton";
import { CardDishManage } from "../CardDishManage/CardDishManage";
import { NavBar } from "../NavBar/NavBar";
import Add from "../../assets/add.svg";

export default function ProductsManage() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-semibold text-xl">
          Products Management
        </h2>
      </div>
      <NavBar />
      <div className=" w-full overflow-y-auto scrollbar-custom mt-6">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-6 ">
          <button className="bg-black py-4 flex flex-col gap-8 justify-center items-center w-full lg:w-44 md:w-56 mt-4 rounded-[8px] border-red border-dashed border hover:border-solid hover:bg-red hover:bg-opacity-10">
            <figure className="w-full flex justify-center items-center rounded-full">
              <img src={Add} alt="Spicy seasoned seafood noodles" />
            </figure>
            <p className="text-red text-sm font-medium">Add new dish</p>
          </button>
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          <CardDishManage />
          {/* Add more CardDishManage components as needed */}
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <Button variant="secundary" text="Discard Changes" />
        <Button variant="primary" text="Save Changes" />
      </div>
    </>
  );
}
