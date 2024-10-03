import PropTypes from "prop-types";
import { Input } from "../Input/Input";

export function Header({ title, date, isHidden }) {
  return (
    <header className="font-barlow flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-white font-semibold text-[28px]">{title}</h1>
        <p className="text-lighter font-light text-base">{date}</p>
      </div>
      {/* <div className={`${isHidden ? "hidden" : null} w-full md:w-fit`}>
        <Input
          variant="primary"
          placeholder="Search for food, coffe, etc.."
          type="text"
        />
      </div> */}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  isHidden: PropTypes.bool,
};
