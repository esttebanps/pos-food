// const orderStructure = {
//     id: String,
//     customer: String,
//     dishes: [],
//     totalPayment: Number,
//     status: String,
//     date: String,
// };

const ordersList = [
    {
        id: "1",
        customer: "John Doe",
        dishes: [
            {
                id: "1",
                name: "Hamburger",
                price: 9.99,
                count: 1,
            },
            {
                id: "2",
                name: "Fries",
                price: 4.99,
                count: 2,
            },
        ],
        total: 14.98,
        state: "Pending",
    },
    {
        id: "2",
        customer: "Jane Smith",
        dishes: [
            {
                id: "3",
                name: "Pizza",
                price: 12.99,
                count: 1,
            },
        ],
        total: 12.99,
        state: "Pending",
    },
    {
        id: "3",
        customer: "Bob Johnson",
        dishes: [
            {
                id: "4",
                name: "Salad",
                price: 8.99,
                count: 1,
            },
        ],
        total: 8.99,
        state: "Pending",
    },
    {
        id: "4",
        customer: "Alice Williams",
        dishes: [
            {
                id: "5",
                name: "Soup",
                price: 5.99,
                count: 1,
            },
        ],
        total: 5.99,
        state: "Pending",
    },
    {
        id: "5",
        customer: "Charlie Brown",
        dishes: [
            {
                id: "6",
                name: "Sandwich",
                price: 7.99,
                count: 1,
            },
        ],
        total: 7.99,
        state: "Pending",
    },
    {
        id: "6",
        customer: "Eve Johnson",
        dishes: [
            {
                id: "7",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "7",
        customer: "Frank Brown",
        dishes: [
            {
                id: "8",
                name: "Ice Cream",
                price: 2.99,
                count: 1,
            },
        ],
        total: 2.99,
        state: "Pending",
    },
    {
        id: "8",
        customer: "Grace Green",
        dishes: [
            {
                id: "9",
                name: "Water",
                price: 0.99,
                count: 1,
            },
        ],
        total: 0.99,
        state: "Pending",
    },
    {
        id: "9",
        customer: "Henry Johnson",
        dishes: [
            {
                id: "10",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "10",
        customer: "Ivy Johnson",
        dishes: [
            {
                id: "11",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "11",
        customer: "Jack Johnson",
        dishes: [
            {
                id: "12",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "12",
        customer: "Lisa Johnson",
        dishes: [
            {
                id: "13",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "13",
        customer: "Mark Johnson",
        dishes: [
            {
                id: "14",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
    {
        id: "14",
        customer: "Nancy Johnson",
        dishes: [
            {
                id: "15",
                name: "Coke",
                price: 1.99,
                count: 1,
            },
        ],
        total: 1.99,
        state: "Pending",
    },
]

// const createOrder = (order) => {
//     return order;
// };

const getOrders = () => {
    const orders = ordersList;
    return orders;
};

const updateOrder = (id, updateOrder) => {
    const orders = getOrders();
    const index = orders.findIndex((order) => order.id === id);
    if (index !== -1) {
        orders[index] = { ...orders[index], ...updateOrder };
        localStorage.setItem("orders", JSON.stringify(orders));
        return orders[index];
    }
    return null;
};

export const OrderCrud = {
    // createOrder,
    getOrders,
    updateOrder
}