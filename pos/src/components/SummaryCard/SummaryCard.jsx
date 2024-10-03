import PropTypes from "prop-types";
import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";

export function SummaryCard({ icon, value, label, percentageChange, trend }) {
  return (
    <article className="md:w-[200px] flex flex-col w-full gap-4 font-barlow bg-black p-4 rounded-[8px]">
      <header className="flex justify-start items-center gap-4">
        <figure className="p-2 rounded-[8px] bg-gray">
          <img src={icon} alt="" />
        </figure>
        <div className="flex gap-2">
          <p className={`${trend === "up" ? "text-green" : "text-red"}`}>
            +{percentageChange}%
          </p>
          <img src={trend === "up" ? Up : Down} alt="icon" />
        </div>
      </header>
      <p className="text-white font-semibold text-[28px]">{value}</p>
      <p className="text-light text-sm font-normal">{label}</p>
    </article>
  );
}
