import Image from "next/image";
import "./book.css";
import Form from "./form";
import book from "../../../../public/book/formHero.jpg"

export default function BookTablePage() {

  return (
    <main className="book-page">


      {/* HERO */}

      <section className="book-hero">
        <Image
          src={book}
          alt="Our Menu"
          fill
          sizes="500vw"
          priority
          className="book-img"
        />
        <div className="book-text">
          <h1>Our Table</h1>
          <p>Reserve your spot and enjoy moments worth staying for.</p>
        </div>
      </section>




      {/* FORM */}


      <section className="book-section">
        <div className="book-content">
          <h2>Book Your <span>Experience</span></h2>
          <p>
            Reserve your table at Bean There and enjoy a warm atmosphere,
            handcrafted coffee, and carefully prepared dishes made to bring
            people together. Whether it’s a casual meetup or a special evening,
            we’re ready to make your visit memorable.
          </p>
          <p></p>
        </div>
        <div className="book-action">
          <Form />
        </div>
      </section>



    </main>
  );

}
