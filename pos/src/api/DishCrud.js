// const dishStructure = {
//     id: String,
//     image: String,
//     name: String,
//     price: Number,
//     category: String,
//     quantity: Number,
// };

const categoriesList = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
]
const dishesList = [
    {
        id: "1",
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENhZXNhciUyMFNhbGFkfGVufDB8MHwwfHx8MA%3D%3D",
        price: 8.99,
        category: categoriesList[1],
        quantity: 15,
    },
    {
        id: "2",
        name: "Tomato Soup",
        image: "https://images.unsplash.com/photo-1629978444632-9f63ba0eff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VG9tYXRvJTIwU291cHxlbnwwfDB8MHx8fDA%3D",
        price: 4.99,
        category: categoriesList[2],
        quantity: 20,
    },
    {
        id: "3",
        name: "Grilled Chicken",
        image: "https://images.unsplash.com/photo-1645066803665-d16a79a21566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdyaWxsZWQlMjBDaGlja2VufGVufDB8MHwwfHx8MA%3D%3D",
        price: 12.99,
        category: categoriesList[3],
        quantity: 8,
    },
    {
        id: "4",
        name: "Spring Rolls",
        image: "https://plus.unsplash.com/premium_photo-1695756121533-3f60bee7ba7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3ByaW5nJTIwUm9sbHN8ZW58MHwwfDB8fHww",
        price: 6.49,
        category: categoriesList[4],
        quantity: 25,
    },
    {   
        id: "5",
        name: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1582577829927-897c60e62d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENob2NvbGF0ZSUyMENha2V8ZW58MHwwfDB8fHww",
        price: 7.99,
        category: categoriesList[5],
        quantity: 30,
    },
    {
        id: "6",
        name: "Spaghetti Carbonara",
        image: "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8MHwwfHx8MA%3D%3D",
        price: 11.99,
        category: categoriesList[0],
        quantity: 12,
    },
    {
        id: "7",
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1659270156961-323ea2afcd0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdyZWVrJTIwU2FsYWR8ZW58MHwwfDB8fHww",
        price: 9.49,
        category: categoriesList[1],
        quantity: 18,
    },
    {
        id: "8",
        name: "Chicken Noodle Soup",
        image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpY2tlbiUyME5vb2RsZSUyMFNvdXB8ZW58MHwwfDB8fHww",
        price: 5.49,
        category: categoriesList[2],
        quantity: 15,
    },
    {
        id: "9",
        name: "BBQ Ribs",
        image: "https://plus.unsplash.com/premium_photo-1668616816697-dbff40de499c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJCUSUyMFJpYnN8ZW58MHwwfDB8fHww",
        price: 14.99,
        category: categoriesList[3],
        quantity: 9,
    },
    {
        id: "10",
        name: "Stuffed Mushrooms",
        image: "https://images.unsplash.com/photo-1501169823221-212bdeaf8556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0dWZmZWQlMjBNdXNocm9vbXN8ZW58MHwwfDB8fHww",
        price: 7.49,
        category: categoriesList[4],
        quantity: 20,
    },
    {
        id: "11",
        name: "Tiramisu",
        image: "https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlyYW1pc3V8ZW58MHwwfDB8fHww",
        price: 6.99,
        category: categoriesList[5],
        quantity: 25,
    },
    {
        id: "12",
        name: "Beef Stroganoff",
        image: "https://images.unsplash.com/photo-1690983329845-638ec321647d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJlZWYlMjBTdHJvZ2Fub2ZmfGVufDB8MHwwfHx8MA%3D%3D",
        price: 13.49,
        category: categoriesList[0],
        quantity: 10,
    },
    {
        id: "13",
        name: "Caprese Salad",
        image: "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FwcmVzZSUyMFNhbGFkfGVufDB8MHwwfHx8MA%3D%3D",
        price: 8.99,
        category: categoriesList[1],
        quantity: 14,
    },
    {   
        id: "14",
        name: "Chili",
        image: "https://plus.unsplash.com/premium_photo-1708077043752-e71f1da52c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxpfGVufDB8MHwwfHx8MA%3D%3D",
        price: 6.99,
        category: categoriesList[2],
        quantity: 17,
    },
    {
        id: "15",
        name: "Lamb Kebabs",
        image: "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFtYiUyMEtlYmFic3xlbnwwfDB8MHx8fDA%3D",
        price: 13.99,
        category: categoriesList[3],
        quantity: 11,
    },
];

// console.log("dishesList",dishesList);
localStorage.setItem("dishes", JSON.stringify(dishesList));
// console.log("getDishes-dishes",localStorage.getItem("dishes"));


const createDish = (dish) => {
    dishesList.push(dish);
    localStorage.setItem("dishes", JSON.stringify(dishesList));
    return newDish;
}

const getDishes = (category) => {
    if (category) {
        const dishes = JSON.parse(localStorage.getItem("dishes"));
        return dishes ? dishes.filter((dish) => dish.category === category) : [];
    }
    const dishes = JSON.parse(localStorage.getItem("dishes"));
    return dishes ? dishes : [];
}

const updateDish = (id, updateDish) => {
    const dishes = getDishes();
    const index = dishes.findIndex((dish) => dish.id === id);
    if (index !== -1) {
        dishes[index] = { ...dishes[index], ...updateDish };
        localStorage.setItem("dishes", JSON.stringify(dishes));
        return dishes[index];
    }
    return null;
}

export const DishCrud = {
    createDish,
    getDishes,
    updateDish
}