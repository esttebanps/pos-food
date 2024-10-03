import PropTypes from "prop-types";
import Trash from "../../assets/trash.svg";

export function Button({ variant, text, onClick, icon }) {
  const variants = {
    primary: (
      <button
        onClick={onClick}
        className="bg-pink hover:bg-red-400 text-white text-base font-barlow font-semibold px-3 py-[14px] rounded-lg w-full"
      >
        {text}
      </button>
    ),
    secundary: (
      <button className="hover:bg-pink hover:text-white focus:bg-pink focus:text-white text-pink border-gray-light border text-sm font-barlow font-semibold px-3 py-[14px] rounded-lg w-full">
        {text}
      </button>
    ),
    icon: (
      <button onClick={onClick} className="rounded-lg">
        <img src={icon} alt="icon" />
      </button>
    ),
    texticon: (
      <button className="bg-coral-400 text-white px-6 py-3 rounded-md flex-1 hover:bg-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-400 focus:ring-opacity-50">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2.5V10M10 17.5V10M10 10H17.5M10 10H2.5"
            stroke="#FAFAFA"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {text}
      </button>
    ),
    tertiary: (
      <button
        onClick={onClick}
        className="hover:bg-pink hover:text-white border-gray-light px-3 py-[14px] border text-white w-full text-base font-barlow font-semibold rounded-lg"
      >
        {text}
      </button>
    ),
    delete: (
      <button onClick={onClick} className="p-[14px] rounded-lg border border-red-pink hover:bg-[#8d2041]">
        <img src={Trash} className="w-8 h-5" alt="trash icon" />
      </button>
    ),
  };

  return variants[variant] || null;
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secundary",
    "icon",
    "texticon",
    "tertiary",
    "delete",
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
