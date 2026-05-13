import Image from "next/image";
import "./menu.css";
import Animation from "../../../components/effects/animations";
import MainImg from "../../../../public/menu/menuhero.jpg";
import menuDrinks from "../../../../public/menu/menu-1.jpg";
import menuFood from "../../../../public/menu/menu-2.jpg";
import menuPizza from "../../../../public/menu/menu-3.jpg";
import { menuData } from "@/data/menu";
import Weekly from "./weekly";

export default function MenuPage() {
  return (
    <main className="menu-page">
      <Animation />

      {/* HERO */}
      <section className="menu-hero">
        <Image
          src={MainImg}
          alt="Our Menu"
          fill
          sizes="100vw"
          priority
          className="menu-img"
        />
        <div className="menu-text">
          <h1>Our Menu</h1>
          <p>Carefully crafted flavors, served with heart.</p>
        </div>
      </section>






      {/* SECTION 1 */}
      <section className="menu-section reveal">
        <div className="menu-image">
          <Image
            src={menuDrinks}
            alt="Menu Drinks"
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Coffee & <span>Drinks</span></h2>
          <ul>
            {menuData.drinks.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>₹ {item.price}</span>
              </li>
            ))} 
          </ul>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="menu-section reverse reveal">
        <div className="menu-image">
          <Image
            src={menuFood}
            alt=""
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Fresh Food & <span>Bakes</span></h2>
          <ul>
            {menuData.food.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>₹ {item.price}</span>
              </li>
            ))}  
          </ul>    
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="menu-section reveal">
        <div className="menu-image">
          <Image
            src={menuPizza}
            alt=""
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Pizza & <span>Specials</span></h2>
          <ul>
            {menuData.pizza.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>₹ {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>



     {/* Weekly Specials        */}
       {/* <Weekly />   */}

    </main>
  );
}

