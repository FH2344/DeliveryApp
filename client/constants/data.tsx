export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/img/pizza.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/img/burger.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/img/italian.png'),
    },
    {
        id: 4,
        name: 'chinese',
        image: require('../assets/img/chinese.png'),
    },
    {
        id: 5,
        name: 'Coffee',
        image: require('../assets/img/coffee.png'),
    },
    {
        id: 6,
        name: 'Healthy',
        image: require('../assets/img/healthy.png'),
    },
]

export const featured = {
    id: 1,
    title: "Top Picks For You",
    description: "Best restaurants with top-rated dishes near you",
    restaurants: [
        {
            id: 101,
            name: "Sushi Zen",
            image: require("../assets/img/sushi-zen.jpg"), // put your own image path
            description: "Authentic Japanese sushi and rolls",
            lng: 50.586,             // example longitude
            lat: 26.228,             // example latitude
            address: "Manama Souq, Manama, Bahrain",
            stars: 4.8,
            reviews: "2.1k",
            category: "Japanese",
            dishes: [
                {
                    id: 1,
                    name: "Salmon Nigiri",
                    description: "Fresh salmon on top of seasoned rice",
                    price: 3.5,
                    image: require("../assets/img/salmon-nigiri.jpg"),
                },
                {
                    id: 2,
                    name: "Dragon Roll",
                    description: "Crispy tempura shrimp with avocado & sauce",
                    price: 6.0,
                    image: require("../assets/img/dragon-roll.jpg"),
                },
            ],
        },
        {
            id: 102,
            name: "Mama Joz",
            image: require("../assets/img/mama-joz.jpg"),
            description: "Hot and spicy pizzas",
            lng: 50.589,
            lat: 26.232,
            address: "Seef Mall, Manama, Bahrain",
            stars: 4.5,
            reviews: "1.5k",
            category: "Fast Food",
            dishes: [
                {
                    id: 1,
                    name: "Pepperoni Pizza",
                    description: "Pizza topped with pepperoni and cheese",
                    price: 2.5,
                    image: require("../assets/img/pepperoni-pizza.jpeg"),
                },
                {
                    id: 2,
                    name: "Chicken Ranch Pizza",
                    description: "Pizza topped with vegetebales, chicken, cheese, and special ranch sause",
                    price: 3.5,
                    image: require("../assets/img/ranch-pizza.png"),
                },
            ],
        },
    ],
};
