import Image from "next/image";
import "./home.css";

export default () => {

  return (
    <div className="main">


      <main className="home">

        <div className="hero">

            {/* <Image
              alt="background"
              src={""}
              style={{  
                width: "90vw",
                height: "100vh"
              }}
            /> */}

          <h1 className="title">BEAN THERE</h1>
          <p className="tagline">Coffee • Food • Moments</p>

          <p className="hero-text">
            Where every cup feels like home. Freshly brewed coffee, comforting food,
            and a place to slow down.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">View Menu</button>
            <button className="btn secondary">Visit Us</button>
          </div>
        </div>

        {/* ABOUT div */}
        <div className="about">
          <h2>More Than Just a Café</h2>
          <p>
            At Bean There, we believe great coffee brings people together.
            From carefully selected beans to freshly prepared food,
            everything is made with heart.
          </p>
        </div>

        {/* MENU HIGHLIGHTS */}
        <div className="menu-content">
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
        </div>

        <div className="featured">
          <h2>Today’s Special</h2>
          <p>
            Classic Cappuccino paired with our signature garlic bread —
            the perfect comfort combo.
          </p>
        </div>


      </main>
    </div>
  )
}