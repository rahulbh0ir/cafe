import Image from "next/image";
import Animation from "@/components/effects/animations";
import "./test.css";
import Bold from "@/components/ui/bold";
import Arrow from "../../../../public/home/arrow.png";
import Back from "../../../../public/home/backColor.jpg";
import Front from "../../../../public/home/frontColor.jpg";
import Coffee from "../../../../public/home/coffeeColor.jpg";
import Food from "../../../../public/home/foodColor.jpg"
import Bake from "../../../../public/home/bakeColor.jpg"
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <Animation />

      <section className="home-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="home/heroImg.png"
        >
          {/* <source src="/hero.webm" type="video/webm" /> */}
          <source src="home/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-title">
          <h1>With Love</h1>
          <h1>&</h1>
          <h1>Care</h1>
        </div>

        <div className="home-btn">
          <button className="btn primary">Visit Us</button>
        </div>


      </section>


      {/* About Section */}


      <section className="about-section">

        <div className="about-container">

          <div className="about-images">

            <Image
              src={Front}
              className="img-main"
              alt="Coffee cup"
            />

            <Image
              src={Back}
              className="img-small"
              alt="Coffee beans"
            />

          </div>



          <div className="about-content">

            <span className="about-label">OUR STORY</span>

            <h2>
              Crafted with <span>passion</span><br />
              since 2026
            </h2>

            <div className="about-divider"></div>

            <p>
              Long Pour began with a simple idea — to create a warm place where
              coffee, conversation, and comfort come together. Every cup we serve
              is brewed with care, using beans sourced from passionate growers
              around the world.
            </p>

            <a href="#" className="about-btn">
              Read our story →
            </a>

          </div>

        </div>

      </section>




     {/* Featured Section  */}

      {/* Section 1 */}

      <section className="feature-section">

        <div className="feature-container">

          <div className="feature-content">
            <span className="feature-label">OUR COFFEE</span>

            <h2>
              Carefully sourced <span>coffee beans</span>
            </h2>

            <div className="feature-divider"></div>

            <p>
              Our coffee is sourced from passionate growers and roasted
              to bring out deep flavors and smooth aromas. Every cup
              is crafted to deliver warmth and character.
            </p>

            <a href="#" className="feature-btn">
              Explore coffee →
            </a>
          </div>

          <div className="feature-image">

            <Image
              src={Coffee}
              alt="coffee"
            />

          </div>

        </div>

      </section>



      {/* Section 2 */}


      <section className="feature-section reverse">

        <div className="feature-container">

          <div className="feature-content">
            <span className="feature-label">OUR FOOD</span>

            <h2>
              Freshly prepared <br/><span>every day</span>
            </h2>

            <div className="feature-divider"></div>

            <p>
              From warm pastries to hearty meals, our food is crafted
              with fresh ingredients to complement your coffee
              experience perfectly.
            </p>

            <a href="#" className="feature-btn">
              See menu →
            </a>
          </div>

          <div className="feature-image">
            <Image
              src={Food}
              alt="food"
            />
          </div>

        </div>

      </section>



      {/* Section 3 */}


      <section className="feature-section">

        <div className="feature-container">

          <div className="feature-content">

            <span className="feature-label">
              OUR BAKES
            </span>

            <h2>
              Freshly baked <br/> <span>every morning</span>
            </h2>

            <div className="feature-divider"></div>

            <p>
              From buttery croissants to rich chocolate cakes, our bakery
              offers handmade treats prepared fresh every morning.
              Perfect companions to your favorite cup of coffee.
            </p>

            <a href="#" className="feature-btn">
              Discover bakes →
            </a>

          </div>

          <div className="feature-image">
            <Image 
              src= {Bake} 
              alt="fresh bakery items" 
            />
          </div>

        </div>

      </section>


      <section>
        <div className="infoButton">
          <Link href="/menu">
            <button className="btn secondary">See Menu</button>
          </Link>
        </div>
      </section>

    </main >
  );
}


