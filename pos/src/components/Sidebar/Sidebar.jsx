import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Home from "../../assets/home.svg";
import Dashboard from "../../assets/dashboard.svg";
import Settings from "../../assets/settings.svg";
import Close from "../../assets/close.svg";
import Menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const Tab = ({ icon, link }) => {
  return (
    <Link to={link} className="w-fit block option h-fit rounded-lg p-4">
      <img src={icon} alt="icon" />
    </Link>
  );
};

const NavWeb = () => {
  return (
    <nav className="bg-black py-4 h-screen w-28 rounded-tr-2xl rounded-br-2xl">
      <div className="p-4 my-2 ml-2 rounded-tl-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray focus:bg-gray">
        <Tab link="/" icon={Home} />
      </div>
      <div className="p-4 my-2 ml-2 rounded-tl-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray">
        <Tab link="/dashboard" icon={Dashboard} />
      </div>
      {/* <div className="p-4 my-2 ml-2 rounded-tl-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray">
        <Tab link="/settings" icon={Settings} />
      </div> */}
    </nav>
  );
};

const Nav = () => {
  return (
    <div className="bg-gray w-full h-screen">
      <nav className="bg-black py-4  w-24 rounded-2xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-br-2xl">
        <div className="p-4 my-2 mx-2 rounded-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray ">
          <Tab link="/" icon={Home} />
        </div>
        <div className="p-4 my-2 mx-2 rounded-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray">
          <Tab link="/dashboard" icon={Dashboard} />
        </div>
        {/* <div className="p-4 my-2 mx-2 rounded-[10px] rounded-bl-[10px] group cursor-pointer hover:bg-gray">
          <Tab link="/settings" icon={Settings} />
        </div> */}
      </nav>
    </div>
  );
};

export function SideBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {!isMobile ? (
        <NavWeb />
      ) : (
        <>
          <img
            src={isOpen ? Close : Menu}
            className="p-4 fixed top-4 right-4 z-30"
            alt="menu"
            onClick={toggleMenu}
          />
          <div
            className={`fixed z-20 w-full h-screen flex flex-col gap-8 transition-all duration-200 ease-in transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <Nav />
          </div>
        </>
      )}
    </header>
  );
}

