import Image from "next/image";
import "./menu.css";
import Animation from "../../../components/effects/animations";
import MainImg from "../../../../public/menu/menuhero.jpg";
import menuDrinks from "../../../../public/menu/menu-1.jpg";
import menuFood from "../../../../public/menu/menu-2.jpg";
import menuPizza from "../../../../public/menu/menu-3.jpg";

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
            priority
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Coffee & <span>Drinks</span></h2>
          <ul>
            <li>
              <span>Signature Cappuccino</span>
              <span className="price">₹180</span>
            </li>
            <li>
              <span>Classic Americano</span>
              <span className="price">₹150</span>
            </li>
            <li>
              <span>Cold Brew Coffee</span>
              <span className="price">₹200</span>
            </li>
            <li>
              <span>Chocolate Mocha</span>
              <span className="price">₹220</span>
            </li>
            <li>
              <span>Fresh Iced Lemonade</span>
              <span className="price">₹140</span>
            </li>
          </ul>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="menu-section reverse reveal">
        <div className="menu-image">
          <Image
            src={menuFood}
            alt=""
            priority
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Fresh Food & <span>Bakes</span></h2>
          <ul>
            <li>
              <span>Butter Croissants</span>
              <span className="price">₹120</span>
            </li>
            <li>
              <span>Garlic Bread</span>
              <span className="price">₹100</span>
            </li>
            <li>
              <span>Cheese Sandwich</span>
              <span className="price">₹150</span>
            </li>
            <li>
              <span>Chocolate Muffins</span>
              <span className="price">₹80</span>
            </li>
            <li>
              <span>Freshly Baked Cookies</span>
              <span className="price">₹60</span>
            </li>
          </ul>


        </div>
      </section>

      {/* SECTION 3 */}
      <section className="menu-section reveal">
        <div className="menu-image">
          <Image
            src={menuPizza}
            alt=""
            priority
            fill
          />
        </div>
        <div className="menu-content">
          <h2>Pizza & <span>Specials</span></h2>
          <ul>
            <li>
              <span>Classic Margherita</span>
              <span className="price">₹200</span>
            </li>
            <li>
              <span>Farm Fresh Veggie Pizza</span>
              <span className="price">₹180</span>
            </li>
            <li>
              <span>Cheese Burst Pizza</span>
              <span className="price">₹250</span>
            </li>
            <li>
              <span>Herb Garlic Flatbread</span>
              <span className="price">₹130</span>
            </li>
            <li>
              <span>Chef’s Daily Special</span>
              <span className="price">₹260</span>
            </li>
          </ul>


        </div>
      </section>
    </main>
  );
}

