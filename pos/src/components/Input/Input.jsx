import PropTypes from "prop-types";
import Icon from "../../assets/search.svg";
export function Input({ variant, type, placeholder }) {
  const variants = {
    primary: (
      <div className="flex justify-start items-center gap-2 h-12 w-full md:w-fit border border-gray-light rounded-lg px-[14px] text-sm text-white font-barlow">
        <img src={Icon} className="w-5 h-5" alt="" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-full placeholder:text-light bg-transparent focus:outline-none"
        />
      </div>
    ),
    secundary: (
      <input
        type={type}
        placeholder={placeholder}
        className="h-full p-4 bg-[#2D303E] border border-gray-light rounded-lg placeholder:text-light text-white bg-transparent focus:outline-none"
      />
    ),
  };

  return variants[variant] || null;
}

Input.propTypes = {
  variant: PropTypes.oneOf(["primary", "secundary"]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
};