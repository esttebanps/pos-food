import PropTypes from "prop-types";

export function MethodPay({ text, Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-36 flex flex-col text-light focus:text-white border border-gray-light focus:border-white rounded-lg py-4 px-6 items-center gap-2"
    >
      <img src={Icon} alt="icon" />
      <p className="">{text}</p>
    </button>
  );
}

MethodPay.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}