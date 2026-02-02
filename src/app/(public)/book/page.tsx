import "./book.css";
import Form from "./form"

export default function BookTablePage() {

  return (
    <main className="book-page">
      {/* HERO */}
      <section className="book-hero">
        <h1>Book a Table</h1>
        <p>
          Reserve your spot and enjoy slow coffee, comforting food,
          and moments worth staying for.
        </p>
      </section>

      {/* FORM WITH BACKGROUND */}
      <section className="book-form-section">
        <Form />
      </section>
    </main>
  );
  
}
