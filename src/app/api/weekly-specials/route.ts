import { NextResponse } from "next/server";
import type { MenuItem } from "@/data/menu";
import img1 from "../../../../public/menu/drink1.jpg"

// 🔒 Temporary mock data (admin/DB will replace later)
const weeklySpecials: MenuItem[] = [
  {
    id: "weekly-1",
    name: "Caramel Cold Coffee",
    price: 260,
    category: "cold-coffee",
    ingredients: ["Cold Coffee", "Caramel Syrup", "Ice Cream"],
    description: "Limited-time caramel special.",
    prepTime: "5 mins",
    isPopular: true,
    isVeg: true,
    calories: 280,
    img: img1,
  },
  {
    id: "weekly-2",
    name: "Paneer Tikka Sandwich",
    price: 210,
    category: "snacks",
    ingredients: ["Paneer", "Bread", "Spices"],
    description: "Chef’s weekly pick.",
    prepTime: "8 mins",
    isPopular: true,
    isVeg: true,
    calories: 340,
    img: img1,
  },
  {
    id: "weekly-3",
    name: "Hazelnut Cold Coffee",
    price: 230,
    category: "cold-coffee",
    ingredients: ["Cold Coffee", "Hazelnut Syrup", "Ice Cream"],
    description: "Nutty and creamy cold coffee.",
    prepTime: "6 mins",
    isPopular: true,
    isVeg: true,
    calories: 260,
    img: img1,
  },
  {
    id: "weekly-4",
    name: "Green Tea",
    price: 120,
    category: "tea",
    ingredients: ["Green Tea Leaves", "Hot Water"],
    description: "Light and healthy antioxidant drink.",
    prepTime: "3 mins",
    isPopular: false,
    isVeg: true,
    calories: 5,
    img: img1,
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
    img: img1,
  },

  {
    id: "food-6",
    name: "Veg Puff",
    price: 70,
    category: "snacks",
    ingredients: ["Puff Pastry", "Mixed Veggies", "Spices"],
    description: "Crispy puff stuffed with spicy veggies.",
    prepTime: "Fresh baked",
    isPopular: true,
    isVeg: true,
    calories: 220,
    img: img1,
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
    img: img1,
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
    img: img1,
  },
];

export async function GET() {
  try {
    // simulate small delay (optional, remove later)
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json(weeklySpecials);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load weekly specials" },
      { status: 500 }
    );
  }
}
