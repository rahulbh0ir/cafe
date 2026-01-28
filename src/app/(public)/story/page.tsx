
import Image from "next/image";
import Animation from "./animation";
import "./story.css";
import MainImg from "../../../assets/images/story-main.jpg";
import S1 from "../../../assets/images/story-1.jpg";
import S2 from "../../../assets/images/story-2.jpg";
import S3 from "../../../assets/images/story-3.jpg";

export default () => {


  return (
    <>
      <Animation />

      <main className="story-page">
        {/* HERO */}
        <section className="story-hero">
          <Image
            src={MainImg}
            alt="Our Story"
            fill
            priority
            className="story-img"
          />
          <div className="story-text">
            <h1>Our Story</h1>
            <p>From a simple idea to a place full of warmth.</p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="story-section">
          <div className="story-image">
            <Image src={S1} alt="story-1" fill />
          </div>
          <div className="story-content">
            <h2>Where It All Began</h2>
            <p>
              Bean There started as a small dream — to create a place where people
              could slow down, connect, and enjoy honest food and coffee made with
              care. What began as a single table idea soon became a shared vision.
            </p>
            <p>
              We wanted to build more than just a spot to grab a drink. 
              From the very beginning, our goal was to create an environment where conversations flow easily, mornings feel gentler, and 
              every visit feels familiar — no matter how many times you’ve been here.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="story-section reverse">
          <div className="story-image">
            <Image src={S2} alt="story-2" fill />
          </div>
          <div className="story-content">
            <h2>Crafted With Heart</h2>
            <p>
              Every cup we brew and every dish we serve is thoughtfully prepared.
              We believe ingredients matter, time matters, and the people we serve
              matter the most.
            </p>
            <p>
              We focus on honest ingredients and familiar flavors — food that feels satisfying without being complicated. 
              Whether you’re stopping by for a quick bite or settling in for a longer visit, 
              our food is meant to make you feel relaxed and at ease.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="story-section">
          <div className="story-image">
            <Image src={S3} alt="story-3" fill />
          </div>
          <div className="story-content">
            <h2>More Than a Café</h2>
            <p>
             Bean There is designed to feel inviting from the moment you walk in. Warm tones, natural elements, and 
             soft lighting create a space where time seems to slow down.
            </p>
            <p>
            More than anything, our café is about people. Friends catching up, quiet solo moments, 
            shared laughter — these are the moments that shape our space. 
            We’re proud to be a part of your daily routines and special memories.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
