import Image from "next/image";
import "./book.css";
import Form from "./form";
import book from "../../../../public/book/formHero.jpg"

export default function BookTablePage() {

  return (
    <main className="book-page">


      {/* HERO */}

      {/* <section className="book-hero">
        <h1>Book a Table</h1>
        <p>
          Reserve your spot and enjoy slow coffee, comforting food,
          and moments worth staying for.
        </p>
      </section> */}


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




      {/* FORM WITH BACKGROUND */}
      <section className="book-form-section">
        <Form />
      </section>



    </main>
  );

}
