import PropTypes from "prop-types";
import { useState, useContext, useMemo } from "react";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { SummaryCard } from "../../components/SummaryCard/SummaryCard";
import Dollar from "../../assets/dollar.svg";
import Ticket from "../../assets/ticket.svg";
import People from "../../assets/people.svg";
import { Button } from "../../components/Button/Buttton";
import { MostOrdered } from "../../components/MostOrdered/MostOrdered";
import { RestaurantContext } from "../../api/RestaurantProvider";

const ItemTable = ({ customer, total, menu }) => {
  const [status, setStatus] = useState(0);

  const statusList = [
    {
      status: "Pending",
      color: "bg-orange text-orange",
    },
    {
      status: "Preparing",
      color: "bg-purple text-purple",
    },
    {
      status: "Completed",
      color: "bg-green text-green",
    },
  ];

  const changeStatus = () => {
    if (status < 2) {
      setStatus(status + 1);
    } else {
      setStatus(0);
    }
  };

  return (
    <tr
      onClick={changeStatus}
      className="text-lighter hover:bg-gray hover:cursor-pointer"
    >
      <td className="px-6 py-4">{customer}</td>
      <td className="px-6 py-4">{menu}</td>
      <td className="px-6 py-4">{total}</td>
      <td className="px-6 py-4">
        <p
          className={`${statusList[status].color} bg-opacity-20 w-24 text-center font-medium px-2 py-1 rounded-full`}
        >
          {statusList[status].status}
        </p>
      </td>
    </tr>
  );
};

const OrderReport = () => {
  const { state } = useContext(RestaurantContext);

  return (
    <div className="bg-black h-fit rounded-[8px] mx-4 mt-6 overflow-x-scroll scrollbar-custom scrollbar-hide">
      <div className="flex p-4 justify-between items-center py-4">
        <p className="text-white font-barlow font-semibold text-xl">
          Order Report
        </p>

      </div>
      <table className="text-sm font-barlow text-left w-full">
        <thead className="text-white border-b border-gray-light">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Menu
            </th>
            <th scope="col" className="px-6 py-3">
              Total Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {state.orders &&
            state.orders.map((order) => (
              <ItemTable
                key={order.id}
                customer={order.customer}
                total={order.total}
                menu={order.dishes[0].name}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export function Dashboard() {

  const { state } = useContext(RestaurantContext);

  const stadistics = useMemo(() => {
    const totalRevenue = state.orders.reduce((total, order) => {
      return total + order.total;
    }, 0);
    const totalDishes = state.dishes.length;
    const totalCustomers = state.orders.reduce((total, order) => {
      return total + order.dishes.length;
    }, 0);
    return { totalRevenue, totalDishes, totalCustomers };
  }, [state.orders, state.dishes]);

  return (
    <main className="flex flex-col md:flex-row">
      <SideBar />
      <div className="flex w-full flex-col md:flex-row justify-between">
        <section className="h-screen w-full flex flex-col pt-6 xl:w-[350%]">
          <div className="flex mx-4 pb-4 flex-col justify-between gap-6 border-b border-b-gray-light">
            <Header
              title="Dashboard"
              date="Tuesday, 2 Feb 2021"
              isHidden={true}
            />
          </div>
          <div className="scrollbar-hide overflow-y-auto mb-6 rounded-[8px] scrollbar-custom">
            <div className="flex flex-col md:flex-row gap-6 mx-4 pt-6 rounded-[8px]">
              <SummaryCard
                value={"$" + Math.round(stadistics.totalRevenue)}
                label="Total Revenue"
                percentageChange={Math.round(stadistics.totalRevenue / 100)}
                trend="up"
                icon={Dollar}
              />
              <SummaryCard
                value={stadistics.totalDishes}
                label="Total Dish Ordered"
                percentageChange={stadistics.totalDishes / 100}
                trend="down"
                icon={Ticket}
              />
              <SummaryCard
                value={stadistics.totalCustomers}
                label="Total Customer"
                percentageChange={stadistics.totalCustomers / 100}
                trend="up"
                icon={People}
              />
            </div>
            <OrderReport />
          </div>
        </section>
        <section className="px-4 flex md:h-screen flex-col w-full">
          <MostOrdered />
        </section>
      </div>
    </main>
  );
}
