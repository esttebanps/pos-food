import { useContext, useState } from "react";
import { MethodPay } from "../MethodPay/MethodPay";
import { Button } from "../Button/Buttton";
import { Order } from "../Order/Order";
import { PaymentPanelContext } from "../PaymentPanelProvider/PaymentPanelProvider";
import { RestaurantContext } from "../../api/RestaurantProvider";
import Return from "../../assets/return.svg";
import Card from "../../assets/card.svg";
import Cash from "../../assets/cash.svg";
import { Input } from "../Input/Input";

const PaymentCashCard = ({ onClick }) => {
  return (
    <section className="flex flex-col h-full justify-between gap-4 text-light">
      <h3 className="text-white font-barlow font-semibold text-xl">Cash</h3>
      <p>Please pay with cash at the counter.</p>
      <p>Your order will be prepared once payment is confirmed.</p>
      <div className="flex flex-col w-full gap-4 pt-6 justify-between">
        <Button
          variant="tertiary"
          text="Cancel Payment"
          className="col-span-6 row-start-3"
        />
        <Button
          onClick={() => onClick()}
          variant="primary"
          text="Confirm Payment"
          className="col-span-6 row-start-3"
        />
      </div>
    </section>
  );
};

const FormPaymentCard = ({ onClick }) => {
  return (
    <>
      <form className="grid grid-cols-6 h-fill grid-rows-3 gap-2">
        <div className="col-span-6 flex flex-col gap-2">
          <label className="text-white font-barlow font-regular text-sm">
            Cardholder Name
          </label>
          <Input variant="secundary" placeholder="John Doe" type="text" />
        </div>
        <div className="col-span-6 row-start-2 flex flex-col gap-2">
          <label className="text-white font-barlow font-regular text-sm">
            Card Number
          </label>
          <Input
            variant="secundary"
            placeholder="1234 1234 1234 1234"
            type="text"
          />
        </div>
        <div className="col-span-3 row-start-3 flex flex-col gap-2">
          <label className="text-white font-barlow font-regular text-sm">
            Expiration Date
          </label>
          <Input variant="secundary" placeholder="MM/YY" type="text" />
        </div>
        <div className="col-span-3 row-start-3 flex flex-col gap-2">
          <label className="text-white font-barlow font-regular text-sm">
            CVC
          </label>
          <Input variant="secundary" placeholder="* * *" type="password" />
        </div>
      </form>
      <footer className="flex w-full gap-4 pt-6 justify-end">
        <Button
          variant="tertiary"
          text="Cancel Payment"
          className="col-span-6 row-start-3"
        />
        <Button
          onClick={onClick}
          variant="primary"
          text="Confirm Payment"
          className="col-span-6 row-start-3"
        />
      </footer>
    </>
  );
};

const Summary = () => {
  const { togglePaymentPanel } = useContext(PaymentPanelContext);
  const { orderList, setOrderList } = useContext(RestaurantContext);
  return (
    <aside className="w-full md:h-screen md:w-1/2 p-4 flex flex-col">
      <Button variant="icon" icon={Return} onClick={togglePaymentPanel} />
      <header className="py-4">
        <h2 className="text-white font-barlow font-semibold text-[28px]">
          Confirmation
        </h2>
        <p className="text-light">Order #34562</p>
      </header>
      <main className="flex flex-col overflow-y-auto h-full scrollbar-hide scrollbar-custom snap-y scroll-smooth gap-6 border-t-[1px] border-gray-light pt-6 px-1">
        {orderList.length > 0 ? (
          orderList.map((dish) => (
            <div key={dish.id} className="snap-center">
              <Order
                id={dish.id}
                img={dish.image}
                name={dish.name}
                price={dish.price}
                count={dish.count}
              />
            </div>
          ))
        ) : (
          <p className="text-light text-center py-20">No dishes in order</p>
        )}
      </main>
      <footer className="flex flex-col gap-10 py-4">
        <div className="grid grid-cols-2 gap-4">
          <p className="text-light text-sm">Discount</p>
          <p className="text-right text-white font-medium">$ 0.00</p>
          <p className="text-light text-sm">Sub total</p>
          <p className="text-right text-white font-medium">
            ${" "}
            {orderList.reduce(
              (total, dish) => total + dish.price * dish.count,
              0
            )}
          </p>
        </div>
      </footer>
    </aside>
  );
};

const PaymentSection = () => {
  const [isCash, setIsCash] = useState(false);

  const { state, dispatch, orderList, setOrderList } =
    useContext(RestaurantContext);

  const handleCreateOrder = () => {
    const order = {
      id: Date.now(),
      customer: "John Doe",
      dishes: orderList,
      total: orderList.reduce(
        (total, dish) => total + dish.price * dish.count,
        0
      ),
      state: "Pending",
    };

    console.log("order before", state.orders);
    dispatch({ type: "CREATE_ORDER", payload: order });
    console.log("order after", state.orders);
    
    setOrderList([]);
  };

  return (
    <section className="w-full md:h-screen md:w-1/2 p-4 pt-10 flex flex-col">
      <header className="py-4">
        <h2 className="text-white font-barlow font-semibold text-[28px]">
          Payment
        </h2>
        <p className="text-light">Order #34562</p>
      </header>
      <section className="flex flex-col gap-4">
        <h3 className="text-white font-barlow font-semibold text-xl">
          Payment Method
        </h3>
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="flex gap-4">
            <MethodPay
              text="Credit Card"
              onClick={() => setIsCash(false)}
              Icon={Card}
            />
            <MethodPay
              text="Cash"
              onClick={() => setIsCash(true)}
              Icon={Cash}
            />
          </div>
          <div>
            {isCash ? (
              <PaymentCashCard onClick={handleCreateOrder} />
            ) : (
              <FormPaymentCard onClick={handleCreateOrder} />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export function PaymentPanel() {
  return (
    <section className="fixed z-40 w-full md:w-[80%] h-screen bg-black right-0 top-0 overflow-y-auto">
      <div className="flex flex-col md:flex-row md:divide-x-2 divide-gray-light">
        <Summary />
        <PaymentSection />
      </div>
    </section>
  );
}
