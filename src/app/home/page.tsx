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


        {/* About Section     */}

        <section className="about">

          <div className="about-text">
            <h2>More Than Just a Café!</h2>

            <h3>A place where coffee meets comfort food.</h3>

            <p className="about-description">
              From freshly brewed coffee to comforting meals, Bean There is a place to slow down and enjoy food made with care. 
              Our menu brings together bold coffees, refreshing drinks, 
              and satisfying food — from warm bakes to handcrafted pizzas — all prepared with attention to quality and flavor.
            </p>
            <p className="about-description">
             Every visit is about more than what’s on the table. 
             It’s about creating a space that feels familiar, relaxed, and worth coming back to.
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