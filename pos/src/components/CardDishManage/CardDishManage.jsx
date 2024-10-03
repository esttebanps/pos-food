import { Button } from "../Button/Buttton";

export function CardDishManage() {
  return (
    <div className="bg-black h-fit w-full flex flex-col justify-start items-center lg:w-44 md:w-56 mt-4 rounded-[8px] border-gray-light border">
      <figure className="w-full flex justify-center items-center h-36 rounded-full">
        <img
          className="w-28 h-28 rounded-full"
          src="https://picsum.photos/200"
          alt="Spicy seasoned seafood noodles"
        />
      </figure>

      <div className="mx-8 font-barlow h-32 text-center flex flex-col pt-4 gap-2 justify-start">
        <p className="text-white text-sm font-medium">
          Spicy seasoned seafood noodles
        </p>
        <p className="text-light text-sm font-medium">$ 2.29 - 20 Bowls</p>
      </div>

      <Button variant="secundary" text="Edit dish" />
    </div>
  );
}
