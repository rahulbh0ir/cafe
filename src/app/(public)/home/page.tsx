import Image from "next/image";
import Animation from "./animations";
import "./home.css";
import BgImg from "../../../public/images/background3.jpg";
import RotatePizza from "../../../public/images/pizza.png";
import Interior from "../../../public/images/home.jpg";
import food from "../../../public/images/mainFood2.jpg";
import coffee from "../../../public/images/homeCoffee.jpg";
import pizza from "../../../public/images/mainPizza2.jpg";

export default function HomePage() {
  return (
    <main className="home-page">
      <Animation />

      {/* SECTION 1 — HERO IMAGE */}
      <section className="home-hero">
        <Image
          src= {BgImg}
          alt="Bean There Café"
          fill
          priority
          className="hero-img"
        />
      </section>



      {/* SECTION 2 — INTRO */}
      <section className="home-intro reveal">
        <h1>Bean There</h1>
        <p>
          More than a café — a place to slow down, sip thoughtfully,
          and enjoy food made with care.
        </p>
      </section>



      {/* SECTION 3 — ABOUT PREVIEW */}
      <section className="home-about reveal">
        <div className="home-about-text">
          <h2>More Than Just Coffee</h2>
          <p>
            At Bean There, we serve more than drinks. From handcrafted coffee
            to comforting food and fresh pizzas, everything we make is guided
            by care, quality, and connection.
          </p>
          <span className="home-link">Read our story →</span>
        </div>

        <div className="home-about-image">
          <Image
            src={RotatePizza}
            alt="Fresh pizza"
            width={420}
            height={420}
            className="rotate-slow"
          />
        </div>
      </section>




      {/* SECTION 4 — MENU PREVIEW */}
      <section className="home-menu reveal">
        <div className="home-menu-card">
          <Image src={coffee} alt="" fill />
          <div className="home-menu-text">
            <h4>Coffee</h4>
            <p>Carefully brewed, always comforting.</p>
          </div>
        </div>

        <div className="home-menu-card">
          <Image src={food} alt="" fill />
          <div className="home-menu-text">
            <h4>Food</h4>
            <p>Fresh, simple, and made to be shared.</p>
          </div>
        </div>

        <div className="home-menu-card">
          <Image src={pizza} alt="" fill />
          <div className="home-menu-text">
            <h4>Pizza</h4>
            <p>Handcrafted dough, honest ingredients.</p>
          </div>
        </div>
      </section>





      {/* SECTION 5 — ATMOSPHERE */}
      <section className="home-atmosphere reveal">
        <Image
          src={Interior}
          alt=""
          fill
          className="atmosphere-img"
        />
        <p>
          Come for the coffee. <br />
          Stay for the moments.
        </p>
      </section>




      {/* SECTION 6 — VISIT */}
      <section className="home-visit reveal">
        <h2>Visit Bean There</h2>
        <p>
          Good coffee, warm food, and a place that feels like home.
        </p>
      </section>



    </main>
  );
}
