import Image from "next/image";
import Animation from "@/components/effects/animations";
import "./landing.css";
import Bold from "@/components/ui/strong";
import Back from "../../../../public/home/back.jpg";
import Front from "../../../../public/home/front.jpg";
import Arrow from "../../../../public/home/arrow.png"


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

        <div className="landing-buttons">
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
            alt="Pizza Table"
            src={Back}
            width={600}
          />
          <Image
            src={Front}
            alt="Fresh pizza"
            className="rotate-slow"
          />
        </div>
      </section>


      {/* 



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




      <section className="home-visit reveal">
        <h2>Visit Bean There</h2>
        <p>
          Good coffee, warm food, and a place that feels like home.
        </p>
      </section> */}



    </main>
  );
}
