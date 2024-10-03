import PropTypes from "prop-types"
import { createContext, useState } from "react";

export const PaymentPanelContext = createContext();

export const PaymentPanelProvider = ({ children }) => {
  const [isOpenPaymentPanel, setIsOpenPaymentPanel] = useState(false);

  const togglePaymentPanel = () => {
    setIsOpenPaymentPanel((prev) => !prev);
  };

  return (
    <PaymentPanelContext.Provider
      value={{ isOpenPaymentPanel, togglePaymentPanel }}
    >
      {children}
    </PaymentPanelContext.Provider>
  );
};

PaymentPanelProvider.propTypes = {
  children: PropTypes.node.isRequired,
}