
import Image from "next/image";
import Animation from "./animation";
import "./story.css";
import MainImg from "../../public/images/story-main.jpg";
import S1 from "../../public/images/story-1.jpg";
import S2 from "../../public/images/story-2.jpg";
import S3 from "../../public/images/story-3.jpg";

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
              Bean There is a space for conversations, creativity, and comfort.
              Whether you come for coffee, food, or a quiet moment, you’re always
              welcome at our table.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
