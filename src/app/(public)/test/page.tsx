import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/effects/animations";
import Carousel from "@/components/effects/carousel";
import "./test.css";
import Bold from "@/components/ui/bold";
import Arrow from "../../../../public/home/arrow.png";
import Back from "../../../../public/home/backColor.jpg";
import Front from "../../../../public/home/frontColor.jpg";
import Coffee from "../../../../public/home/coffeeColor.jpg";
import Food from "../../../../public/home/foodColor.jpg";
import Bake from "../../../../public/home/bakeColor.jpg";



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
          <a className="btn primary" href="#location">Visit Us</a>
        </div>


      </section>


      {/* About Section */}


      <section className="about-section">

        <div className="about-container">


          <div className="about-content">

            <span className="about-label">OUR STORY</span>

            <h2>
              Crafted with passion<br />
              <span>since 2026</span>
            </h2>

            <div className="divider"></div>

            <p>
              <Bold>Bean There</Bold> began with a simple idea — to create a warm place where
              coffee, conversation, and comfort come together. Every cup we serve
              is brewed with care, using beans sourced from passionate growers
              around the world.
            </p>

            <Link href="/story" className="about-btn">
              Read our story →
            </Link>

          </div>

          <div className="about-images reveal">

            <Image
              src={Back}
              className="img-main"
              alt="Coffee cup"
            />

            <Image
              src={Front}
              className="img-small"
              alt="Coffee beans"
            />

          </div>

        </div>

      </section>




      {/* Featured Section  */}


      {/* Section 1 */}

      <section className="feature-section">

        <div className="feature-container">

          <div className="feature-image reveal">

            <Image
              src={Coffee}
              alt="coffee"
            />

          </div>

          <div className="feature-content">
            <span className="feature-label">OUR COFFEE</span>

            <h2>
              Carefully sourced <span>coffee beans</span>
            </h2>

            <div className="divider"></div>

            <p>
              Our coffee is sourced from passionate growers and roasted
              to bring out deep flavors and smooth aromas. Every cup
              is crafted to deliver warmth and character.
            </p>

            <Link href="/menu" className="feature-btn">
              Explore coffee →
            </Link>
          </div>



        </div>

      </section>



      {/* Section 2 */}


      <section className="feature-section reverse">

        <div className="feature-container">


          <div className="feature-image reveal">
            <Image
              src={Food}
              alt="food"
            />
          </div>

          <div className="feature-content">
            <span className="feature-label">OUR FOOD</span>

            <h2>
              Freshly prepared <br /><span>every day</span>
            </h2>

            <div className="divider"></div>

            <p>
              From warm pastries to hearty meals, our food is crafted
              with fresh ingredients to complement your coffee
              experience perfectly.
            </p>

            <Link href="/menu" className="feature-btn">
              Explore Food →
            </Link>
          </div>


        </div>

      </section>



      {/* Section 3 */}


      <section className="feature-section">

        <div className="feature-container">

          <div className="feature-image reveal">
            <Image
              src={Bake}
              alt="fresh bakery items"
            />
          </div>

          <div className="feature-content">

            <span className="feature-label">
              OUR BAKES
            </span>

            <h2>
              Freshly baked <br /> <span>every morning</span>
            </h2>

            <div className="divider"></div>

            <p>
              From buttery croissants to rich chocolate cakes, our bakery
              offers handmade treats prepared fresh every morning.
              Perfect companions to your favorite cup of coffee.
            </p>

            <Link href="/menu" className="feature-btn">
              Discover Bakes →
            </Link>

          </div>



        </div>

      </section>


      <section className="gallery-section">

        <div className="gallery-container">

          <div className="gallery-header">
            <span className="gallery-label">ATMOSPHERE</span>

            <h2>
              A space made for <span><br />moments</span>
            </h2>

            <div className="divider"></div>
          </div>

          <div className="carousel">
            <Carousel />
          </div>

        </div>

      </section>






      <section className="map-section" id="location">
        <div className="map-container">

          <div className="map-content">

            <span className="map-label">LOCATION</span>

            <h2>Visit <span>Us</span></h2>
            <div className="divider"></div>

            <p>
              Survey No, 124,<br />
              Paud Rd, Rambaug Colony, <br />
              Kothrud, Pune, Maharashtra 411038
            </p>

            <Link
              href="https://maps.google.com/?cid=3163190336344189246&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
              className="map-btn"
              target="_blank"
            >
              Locate →
            </Link>

          </div>

          <div className="map" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.156154462806!2d73.81423652951185!3d18.517957927213054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University%20(MIT-WPU)!5e0!3m2!1sen!2sin!4v1777889819500!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>

      </section>






      <section className="news-section">

        <div className="news-heading">
          <span className="news-label">NEWS</span>
          <h2>All the <span>Latest Brews</span></h2>
          <p>Sign up to our newsletter to stay up to date on the latest news, events & promos at Bean There.</p>
        </div>

        <div className="news-action">
          <div className="news-content">
            <input type="email" placeholder="Your Email" />
            <button className="news-btn">Submit →</button>
          </div>
        </div>

      </section>





    </main >
  );
}


