import { useContext } from "react";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { OrderPanel } from "../../components/OrderPanel/OrderPanel";
import { Button } from "../../components/Button/Buttton";
import { Dishes } from "../../components/Dishes/Dishes";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { PaymentPanelProvider } from "../../components/PaymentPanelProvider/PaymentPanelProvider";
import { UIContext } from "../../UiProvider/UiProvider";

export function Home() {
  const { isNavigationMenuOpen, isPaymentPanelOpen, toggleMenu } =
    useContext(UIContext);

  return (
    <main className="flex justify-between">
      <SideBar />
      <section className="h-screen flex flex-col w-full">
        {isNavigationMenuOpen && (
          <div className="pt-4 pl-4 w-60">
            <Button
              variant="tertiary"
              onClick={toggleMenu}
              text="Open Order Panel"
            />
          </div>
        )}
        <div className="flex px-4 flex-col mt-6 justify-between gap-6">
          <Header
            title="Jaegar Resto"
            date="Tuesday, 2 Feb 2021"
            isHidden={false}
          />
          <NavBar />
          <h2 className="text-white mt-2 mb-6 font-barlow font-semibold text-xl">
            Choose Dishes
          </h2>
        </div>
        <Dishes />
      </section>
      <PaymentPanelProvider>
        {isNavigationMenuOpen ? (
          <OrderPanel
            isOpen={isPaymentPanelOpen}
            variant="mobile"
            onClick={toggleMenu}
          />
        ) : (
          <OrderPanel isOpen={isPaymentPanelOpen} variant="web" />
        )}
      </PaymentPanelProvider>
    </main>
  );
}
