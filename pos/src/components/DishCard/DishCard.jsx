export function DishCard({ img, name, price, quantity, onClick }) {
  return (
    <button onClick={onClick} className="bg-black h-fit flex flex-col justify-end items-center w-44 md:w-48 p-4 mt-8 rounded-2xl relative">
      <img
        className="rounded-full object-cover w-28 h-28 md:w-32 md:h-32 bg-center absolute -top-8 left-1/2 transform -translate-x-1/2 z-10"
        src={img}
        alt="photo"
      />
      <div className="mt-20 pb-4 mx-2 font-barlow h-32 text-center flex flex-col gap-2 justify-end">
        <p className="text-white text-sm font-medium">
          {name}
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm font-medium">$ {price}</p>
          <p className="text-light text-sm font-medium">{quantity} Bowls available</p>
        </div>
      </div>
    </button>
  );
}
