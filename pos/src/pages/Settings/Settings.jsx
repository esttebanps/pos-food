import PropTypes from "prop-types";
import { React, useState } from "react";
import { SideBar } from "../../components/Sidebar/Sidebar";
import Product from "../../assets/product.svg";
import Info from "../../assets/info.svg";
import ProductsManage from "../../components/ProductsManage/ProductsManage";
import AboutUs from "../../components/AboutUs/AboutUs";

const Item = ({ text, label, icon, onClick, change }) => {
  return (
    <button
      onClick={() => onClick(!change)}
      className="flex w-full items-start gap-4 py-4 px-4 rounded-[8px] text-white hover:bg-red hover:bg-opacity-15 hover:cursor-pointer hover:text-red focus:text-red focus:bg-red focus:bg-opacity-15 active:bg-red active:bg-opacity-20"
    >
      <img src={icon} alt="icon" />
      <div className="flex flex-col items-start justify-start gap-2 ">
        <span className=" text-sm">{text}</span>
        <span className="text-lighter text-xs">{label}</span>
      </div>
    </button>
  );
};

export function Settings() {
  const [change, setChange] = useState(true);

  return (
    <main className="flex flex-col md:flex-row h-full md:h-screen font-barlow">
      <SideBar />
      <div className="py-6 px-4 flex-shrink-0">
        <h1 className="text-white font-semibold text-[28px]">Settings</h1>
        <div className="bg-black rounded-[8px] mt-6 flex flex-col">
          <nav>
            <ul>
              <Item
                onClick={setChange}
                change={change}
                text="Product Management"
                label="Manage your products, pricing, etc"
                icon={Product}
              />
              <Item
                onClick={setChange}
                change={change}
                text="About Us"
                label="Find out more about us"
                icon={Info}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-grow flex mt-6 mb-6 mr-4 ml-4 md:ml-0 flex-col overflow-hidden bg-black rounded-[8px] p-6">
        {change ? <ProductsManage /> : <AboutUs />}
      </div>
    </main>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  change: PropTypes.bool.isRequired,
};
