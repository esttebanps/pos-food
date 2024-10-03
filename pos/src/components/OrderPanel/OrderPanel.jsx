import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Button } from "../Button/Buttton";
import { Order } from "../Order/Order";
import Return from "../../assets/return.svg";
import { PaymentPanel } from "../PaymentPanel/PaymentPanel";
import { PaymentPanelContext } from "../PaymentPanelProvider/PaymentPanelProvider";
import { RestaurantContext } from "../../api/RestaurantProvider";

export function OrderPanel({ isOpen, variant, onClick }) {
  const { isOpenPaymentPanel, togglePaymentPanel } =
    useContext(PaymentPanelContext);

  const { orderList } = useContext(RestaurantContext);

  const classes = {
    mobile: `fixed z-40 w-full h-screen bg-black right-0 flex flex-col gap-8 p-4 transition-all duration-300 ease-in-out ${
      isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`,
    web: "w-[800px] h-screen bg-black font-barlow",
  };

  return (
    <section className={`p-6 flex flex-col gap-6 ${classes[variant]} `}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-white font-barlow font-semibold text-xl">
              Orders #34562
            </p>
            {variant == "mobile" && (
              <Button variant="icon" icon={Return} onClick={onClick} />
            )}
          </div>
          <nav className="flex gap-2">
            <div>
              <Button variant="secundary" text="Dine In" />
            </div>
            <div>
              <Button variant="secundary" text="To Go" />
            </div>
            <div>
              <Button variant="secundary" text="Delivery" />
            </div>
          </nav>
        </div>

        <div className="w-full text-white font-semibold grid grid-cols-3">
          <p className="col-span-2">Item</p>
          <div className="grid grid-cols-3 justify-items-center col-span-1">
            <p>Qty</p>
            <p className="col-span-2 justify-self-end">Price</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col scrollbar-hide overflow-y-auto scrollbar-custom snap-y scroll-smooth gap-6 border-t-[1px] border-gray-light pt-6 px-1">
        {orderList.length > 0 ? orderList.map((dish) => (
          <div className="snap-center" key={dish.id}>
            <Order
              id={dish.id}
              img={dish.image}
              name={dish.name}
              price={dish.price}
              count={dish.count}
            />
          </div>
        )): (<p className="text-light text-center py-20">No dishes in order</p>)}
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4">
          <p className="text-light text-sm">Discount</p>
          <p className="text-right text-white font-medium">$ 0.00</p>
          <p className="text-light text-sm">Sub total</p>
          <p className="text-right text-white font-medium">
            ${orderList.reduce((acc, dish) => acc + dish.price * dish.count, 0)}
          </p>
        </div>
        <Button
          variant="primary"
          text="Continue to Payment"
          onClick={togglePaymentPanel}
        />
      </div>

      {isOpenPaymentPanel && <PaymentPanel />}
    </section>
  );
}

OrderPanel.propTypes = {
  isOpen: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
