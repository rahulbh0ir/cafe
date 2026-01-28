import Image from "next/image";
import "./menu.css";
import Animation from "./animation";
import MainImg from "../../../public/images/menuMain1.jpg";
import menuDrinks from "../../../public/images/menuDrinks.jpg";
import menuFood from "../../../public/images/menuFood.jpg";
import menuPizza from "../../../public/images/menuPizza.jpg";

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
          priority
          className="menu-img"
        />
        <div className="menu-text">
          <h1>Our Menu</h1>
          <p>Carefully crafted flavors, served with heart.</p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="menu-section">
        <div className="menu-image">
          <Image src={menuDrinks} alt="" fill />
        </div>
        <div className="menu-content">
          <h2>Coffee & Drinks</h2>
          <ul>
            <li>Signature Cappuccino</li>
            <li>Classic Americano</li>
            <li>Cold Brew Coffee</li>
            <li>Chocolate Mocha</li>
            <li>Fresh Iced Lemonade</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="menu-section reverse">
        <div className="menu-image">
          <Image src={menuFood} alt="" fill />
        </div>
        <div className="menu-content">
          <h2>Fresh Food & Bakes</h2>
          <ul>
            <li>Butter Croissants</li>
            <li>Garlic Bread</li>
            <li>Cheese Sandwich</li>
            <li>Chocolate Muffins</li>
            <li>Freshly Baked Cookies</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="menu-section">
        <div className="menu-image">
          <Image src={menuPizza} alt="" fill />
        </div>
        <div className="menu-content">
          <h2>Pizza & Specials</h2>
          <ul>
            <li>Classic Margherita</li>
            <li>Farm Fresh Veggie Pizza</li>
            <li>Cheese Burst Pizza</li>
            <li>Herb Garlic Flatbread</li>
            <li>Chef’s Daily Special</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

