import Image from "next/image";
import background from "../../public/images/background4.jpg";
import pizza from "../../public/images/pizza.png";
import "./home.css";

export default () => {

  return (
    <div className="main">


      <main className="home">

        <section className="hero">

          <Image
            className="bg-img"
            alt="background"
            src={background}
            // width={1500}
            style={{
              width: "100%",
              height: "auto",
              margin: 0,
            }}
          />

          <div className="heading">
            <h1 className="title">BEAN THERE</h1>
            <p className="tagline">Coffee • Food • Moments</p>
          </div>

          <div className="info">
            <p className="hero-text">
              Where every cup feels like home. Freshly brewed coffee, comforting food,
              and a place to slow down.
            </p>

            <div className="hero-buttons">
              <button className="btn primary">View Menu</button>
              <button className="btn secondary">Visit Us</button>
            </div>
          </div>
        </section>



        {/* ABOUT div */}
        {/* <section className="about">

          <div className="about-details">
            <h2>More Than Just a Café</h2>
            <p>
              At Bean There, we believe great coffee brings people together.
              From carefully selected beans to freshly prepared food,
              everything is made with heart.
            </p>
          </div>
          
          <div className="rotating-img">
            <Image
              alt="pizza"
              src={pizza}
              width={400}
              style={{width : "100%" }}
            />
          </div>

        </section> */}

        <section className="about">
          <div className="about-text">
            <h2>More Than Just a Café</h2>

            <p className="about-intro">
              A place where coffee meets comfort food.
            </p>

            <p className="about-description">
              At Bean There, we’re more than a stop for great coffee — we’re a space
              built around thoughtful brewing, comforting food, and shared moments.
              From handcrafted coffees and refreshing drinks to oven-fresh pizzas
              and warm bakes, every item on our menu is prepared with care and balance.
            </p>

            <p className="about-description">
              We believe food should feel just as good as it tastes. That’s why we
              focus on quality ingredients, simple techniques, and flavors that
              bring people back. Whether it’s a quiet coffee break or a relaxed meal
              with friends, Bean There is made to feel familiar, welcoming, and worth
              returning to.
            </p>
          </div>

          <div className="about-visual">
            <div className="rotating-img">
              <Image
                alt="pizza"
                src={pizza}
                width={400}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </section>





        {/* MENU HIGHLIGHTS */}
        <section className="menu-content">
          <h2>Menu Highlights</h2>

          <div className="menu-grid">
            <div className="menu-item">
              <h3>☕ Signature Coffee</h3>
              <p>Rich, aromatic blends brewed to perfection.</p>
            </div>

            <div className="menu-item">
              <h3>🥐 Fresh Bakes</h3>
              <p>Soft, warm, and baked every morning.</p>
            </div>

            <div className="menu-item">
              <h3>🍕 Artisanal Pizza</h3>
              <p>Hand-stretched dough with premium toppings.</p>
            </div>

            <div className="menu-item">
              <h3>🥤 Cool Drinks</h3>
              <p>Refreshing beverages for every mood.</p>
            </div>
          </div>
        </section>

        <section className="featured">
          <h2>Today’s Special</h2>
          <p>
            Classic Cappuccino paired with our signature garlic bread —
            the perfect comfort combo.
          </p>
        </section>


      </main>
    </div>
  )
}