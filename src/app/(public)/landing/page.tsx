import Image from "next/image";
import Animation from "@/components/effects/animations";
import "./landing.css";
import Bold from "@/components/ui/strong";
import Back from "../../../../public/home/back.jpg";
import Front from "../../../../public/home/front.jpg";
import Arrow from "../../../../public/home/arrow.png"
import Coffee from "../../../../public/home/coffee.jpg"


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
          <button className="btn secondary">Visit Us</button>
        </div>


      </section>



      <section className="home-about">
        <div className="home-about-text">
          <h1>Since <span>2026</span></h1>
          <p>
            We began Bean There in 2026 with one heartfelt goal: <Bold>to create a space that feels like a second home for the people of Lucknow.
              Looking back</Bold>, it still feels surreal to see how far we’ve come—from becoming a beloved landmark in Lucknow
            to being welcomed with open arms by the people of Lucknow.
          </p>
          <p>
            <Bold>
              A restaurant is never built alone,
              and none of this would be possible without the passion, dedication, and love of our incredible team.
            </Bold>
          </p>
          <div className="about-button">
            <button className="btn primary">Read our story
              <span>
                <Image
                  alt="arrow"
                  src={Arrow}
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="home-about-image reveal">
          <Image
            src={Back}
            alt="Coffee Back"
            width={600}
            className="coffeeBack"
          />
          <Image
            src={Front}
            alt="Coffee Front"
            className="coffeeFront"
          />
        </div>
      </section>


      <section className="coffeeContainer">

        <div className="coffeeImg">
          <Image
            alt="coffee image"
            src={Coffee}
            fill
          />
        </div>

        <div className="coffeeDetails">
          <h1>Our <span>Coffee</span></h1>

          <p>
            We serve a thoughtfully developed 100% Arabica blend, custom-roasted in collaboration with Bili Hu Coffee Roasters.
            For us, coffee is a craft in progress. <Bold>We’re always exploring new techniques and flavors to make sure every espresso hits just right.</Bold> 
          </p>
          <p>
            Each outlet features an exclusive barista creation that changes from place to place, so make sure you ask for the house favorite when you visit
            A few standouts from our menu are the <Bold> nutty Brown Butter Latte, the aromatic Cinnamon Cappuccino.</Bold>
          </p>



        </div>



      </section>


    </main>
  );
}
