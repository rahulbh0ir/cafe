import { StaticImageData } from "next/image";
import drink1 from "../../public/menu/drink1.jpg"
import drink2 from "../../public/menu/drink2.jpg"
import drink3 from "../../public/menu/drink3.jpg"
import drink4 from "../../public/menu/drink4.jpg"
import drink5 from "../../public/menu/menu-1.jpg"
import food1 from "../../public/menu/food1.jpg"
import food2 from "../../public/menu/food2.jpg"
import food3 from "../../public/menu/food3.jpg"
import food4 from "../../public/menu/food4.jpg"
import food5 from "../../public/menu/food5.jpg"
import piz1 from "../../public/menu/piz1.jpg"
import piz2 from "../../public/menu/piz2.jpg"
import piz3 from "../../public/menu/piz3.jpg"
import piz4 from "../../public/menu/piz4.jpg"
import piz5 from "../../public/menu/piz5.jpg"


export type MenuItem = {
  id: string;
  name: string;
  price: number;
  size?: string;
  category?: string;
  ingredients: string[];
  description: string;
  prepTime: string;
  isPopular: boolean;
  isVeg: boolean;
  calories: number;
  img: StaticImageData;
};

export type MenuData = {
  drinks: MenuItem[];
  food: MenuItem[];
  pizza: MenuItem[];
};




export const menuData: MenuData = {
  drinks: [
    {
      id: "drink-1",
      name: "Signature Cappuccino",
      price: 180,
      category: "coffee",
      ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
      description: "Rich espresso blended with velvety steamed milk and foam.",
      prepTime: "5 mins",
      isPopular: true,
      isVeg: true,
      calories: 120,
      img: drink1
    },
    {
      id: "drink-2",
      name: "Classic Americano",
      price: 150,
      category: "coffee",
      ingredients: ["Espresso", "Hot Water"],
      description: "Smooth and bold diluted espresso.",
      prepTime: "3 mins",
      isPopular: false,
      isVeg: true,
      calories: 15,
      img: drink2
    },
    {
      id: "drink-3",
      name: "Cold Brew Coffee",
      price: 200,
      category: "cold-coffee",
      ingredients: ["Cold Brew Extract", "Ice", "Water"],
      description: "Slow-steeped coffee with low acidity.",
      prepTime: "12 hrs brew",
      isPopular: true,
      isVeg: true,
      calories: 25,
      img: drink5
    },
    {
      id: "drink-4",
      name: "Chocolate Mocha",
      price: 220,
      category: "coffee",
      ingredients: ["Espresso", "Chocolate Syrup", "Milk"],
      description: "Perfect blend of coffee and chocolate.",
      prepTime: "6 mins",
      isPopular: true,
      isVeg: true,
      calories: 210,
      img: drink3
    },
    {
      id: "drink-5",
      name: "Fresh Iced Lemonade",
      price: 140,
      category: "refreshment",
      ingredients: ["Lemon", "Sugar Syrup", "Ice", "Water"],
      description: "Refreshing summer cooler.",
      prepTime: "2 mins",
      isPopular: false,
      isVeg: true,
      calories: 90,
      img: drink4
    },

    // {
    //   id: "drink-6",
    //   name: "Vanilla Latte",
    //   price: 210,
    //   category: "coffee",
    //   ingredients: ["Espresso", "Vanilla Syrup", "Steamed Milk"],
    //   description: "Smooth latte with sweet vanilla notes.",
    //   prepTime: "5 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 190,
    // },
    // {
    //   id: "drink-7",
    //   name: "Hazelnut Cold Coffee",
    //   price: 230,
    //   category: "cold-coffee",
    //   ingredients: ["Cold Coffee", "Hazelnut Syrup", "Ice Cream"],
    //   description: "Nutty and creamy cold coffee.",
    //   prepTime: "6 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 260,
    // },
    // {
    //   id: "drink-8",
    //   name: "Green Tea",
    //   price: 120,
    //   category: "tea",
    //   ingredients: ["Green Tea Leaves", "Hot Water"],
    //   description: "Light and healthy antioxidant drink.",
    //   prepTime: "3 mins",
    //   isPopular: false,
    //   isVeg: true,
    //   calories: 5,

    // },
    // {
    //   id: "drink-9",
    //   name: "Masala Chai",
    //   price: 100,
    //   category: "tea",
    //   ingredients: ["Tea Leaves", "Milk", "Spices", "Sugar"],
    //   description: "Traditional Indian spiced tea.",
    //   prepTime: "7 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 130,
    // },
    // {
    //   id: "drink-10",
    //   name: "Strawberry Smoothie",
    //   price: 240,
    //   category: "smoothie",
    //   ingredients: ["Strawberries", "Milk", "Honey", "Ice"],
    //   description: "Fresh fruity blended smoothie.",
    //   prepTime: "4 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 220,
    // },
  ],

  food: [
    {
      id: "food-1",
      name: "Butter Croissants",
      price: 120,
      category: "bakes",
      ingredients: ["Flour", "Butter", "Yeast", "Sugar"],
      description: "Flaky French-style croissant.",
      prepTime: "Fresh baked",
      isPopular: true,
      isVeg: true,
      calories: 250,
      img: food1
    },
    {
      id: "food-2",
      name: "Garlic Bread",
      price: 100,
      category: "snacks",
      ingredients: ["Bread", "Garlic", "Butter", "Herbs"],
      description: "Toasted bread with garlic butter.",
      prepTime: "8 mins",
      isPopular: true,
      isVeg: true,
      calories: 180,
      img: food2
    },
    {
      id: "food-3",
      name: "Cheese Sandwich",
      price: 150,
      category: "snacks",
      ingredients: ["Bread", "Cheese", "Butter"],
      description: "Classic grilled cheese sandwich.",
      prepTime: "6 mins",
      isPopular: false,
      isVeg: true,
      calories: 300,
      img: food3
    },
    {
      id: "food-4",
      name: "Chocolate Muffins",
      price: 80,
      category: "dessert",
      ingredients: ["Cocoa", "Flour", "Eggs", "Sugar"],
      description: "Soft and moist chocolate muffin.",
      prepTime: "Fresh baked",
      isPopular: true,
      isVeg: false,
      calories: 280,
      img: food4
    },
    {
      id: "food-5",
      name: "Freshly Baked Cookies",
      price: 60,
      category: "dessert",
      ingredients: ["Flour", "Butter", "Chocolate Chips"],
      description: "Crispy on edges, soft inside.",
      prepTime: "Fresh baked",
      isPopular: true,
      isVeg: true,
      calories: 160,
      img: food5
    },

    // {
    //   id: "food-6",
    //   name: "Veg Puff",
    //   price: 70,
    //   category: "snacks",
    //   ingredients: ["Puff Pastry", "Mixed Veggies", "Spices"],
    //   description: "Crispy puff stuffed with spicy veggies.",
    //   prepTime: "Fresh baked",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 220,
    // },
    // {
    //   id: "food-7",
    //   name: "Paneer Sandwich",
    //   price: 170,
    //   category: "snacks",
    //   ingredients: ["Bread", "Paneer", "Spices", "Butter"],
    //   description: "Grilled sandwich with spiced paneer.",
    //   prepTime: "7 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 320,
    // },
    // {
    //   id: "food-8",
    //   name: "Brownie",
    //   price: 140,
    //   category: "dessert",
    //   ingredients: ["Dark Chocolate", "Flour", "Butter"],
    //   description: "Rich fudgy chocolate brownie.",
    //   prepTime: "Fresh baked",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 350,
    // },
    // {
    //   id: "food-9",
    //   name: "French Fries",
    //   price: 110,
    //   category: "snacks",
    //   ingredients: ["Potatoes", "Salt", "Oil"],
    //   description: "Crispy golden fries.",
    //   prepTime: "5 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 290,
    // },
    // {
    //   id: "food-10",
    //   name: "Veg Wrap",
    //   price: 190,
    //   category: "snacks",
    //   ingredients: ["Tortilla", "Veggies", "Sauce"],
    //   description: "Healthy veggie-loaded wrap.",
    //   prepTime: "6 mins",
    //   isPopular: false,
    //   isVeg: true,
    //   calories: 260,
    // },
  ],

  pizza: [
    {
      id: "pizza-1",
      name: "Classic Margherita",
      price: 200,
      size: "Regular",
      ingredients: ["Pizza Base", "Tomato Sauce", "Mozzarella"],
      description: "Simple and cheesy classic pizza.",
      prepTime: "12 mins",
      isPopular: true,
      isVeg: true,
      calories: 500,
      img: piz2
    },
    {
      id: "pizza-2",
      name: "Farm Fresh Veggie Pizza",
      price: 180,
      size: "Regular",
      ingredients: ["Capsicum", "Onion", "Corn", "Cheese"],
      description: "Loaded with fresh vegetables.",
      prepTime: "14 mins",
      isPopular: true,
      isVeg: true,
      calories: 520,
      img: piz1
    },
    {
      id: "pizza-3",
      name: "Cheese Burst Pizza",
      price: 250,
      size: "Regular",
      ingredients: ["Extra Cheese", "Pizza Base", "Sauce"],
      description: "Ultimate cheese lovers delight.",
      prepTime: "15 mins",
      isPopular: true,
      isVeg: true,
      calories: 650,
      img: piz3
    },
    {
      id: "pizza-4",
      name: "Herb Garlic Flatbread",
      price: 130,
      size: "Regular",
      ingredients: ["Flatbread", "Garlic", "Herbs"],
      description: "Light herbed flatbread.",
      prepTime: "10 mins",
      isPopular: false,
      isVeg: true,
      calories: 300,
      img: piz4
    },
    {
      id: "pizza-5",
      name: "Chef’s Daily Special",
      price: 260,
      size: "Regular",
      ingredients: ["Chef Choice Toppings"],
      description: "Ask staff for today's surprise.",
      prepTime: "15 mins",
      isPopular: true,
      isVeg: true,
      calories: 600,
      img: piz5
    },

    // {
    //   id: "pizza-6",
    //   name: "Paneer Tikka Pizza",
    //   price: 280,
    //   size: "Regular",
    //   ingredients: ["Paneer", "Tikka Sauce", "Onions"],
    //   description: "Indian-style paneer tikka pizza.",
    //   prepTime: "16 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 640,
    // },
    // {
    //   id: "pizza-7",
    //   name: "Corn & Cheese Pizza",
    //   price: 220,
    //   size: "Regular",
    //   ingredients: ["Sweet Corn", "Mozzarella"],
    //   description: "Sweet corn with melted cheese.",
    //   prepTime: "13 mins",
    //   isPopular: false,
    //   isVeg: true,
    //   calories: 540,
    // },
    // {
    //   id: "pizza-8",
    //   name: "Spicy Veggie Pizza",
    //   price: 240,
    //   size: "Regular",
    //   ingredients: ["Jalapenos", "Capsicum", "Onion"],
    //   description: "For spicy food lovers.",
    //   prepTime: "14 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 560,
    // },
    // {
    //   id: "pizza-9",
    //   name: "Double Cheese Pizza",
    //   price: 300,
    //   size: "Regular",
    //   ingredients: ["Mozzarella", "Cheddar"],
    //   description: "Extra cheesy indulgence.",
    //   prepTime: "15 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 700,
    // },
    // {
    //   id: "pizza-10",
    //   name: "Veg Supreme Pizza",
    //   price: 320,
    //   size: "Regular",
    //   ingredients: ["Mixed Veggies", "Cheese", "Sauce"],
    //   description: "Fully loaded veggie pizza.",
    //   prepTime: "17 mins",
    //   isPopular: true,
    //   isVeg: true,
    //   calories: 680,
    // },
  ],
};
