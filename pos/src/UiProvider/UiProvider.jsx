import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";


export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(
    window.innerWidth <= 768
  );
  const [isPaymentPanelOpen, setIsPaymentPanelOpen] = useState(false);

  const toggleMenu = () => setIsPaymentPanelOpen((prev) => !prev);

  useEffect(() => {

    const handleResize = () =>
      setIsNavigationMenuOpen(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UIContext.Provider
      value={{ isNavigationMenuOpen, isPaymentPanelOpen, toggleMenu }}
    >
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
