import "./book.css";

export default function BookTablePage() {


  const handleSubmit = () => {

  }


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
        <div className="form-wrapper">
          <h2>Reservation Details</h2>
          <p className="form-intro">
            Fill in the details below and we’ll have a table ready for you.
          </p>

          <form className="book-form">
            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Date</label>
                <input type="date" />
              </div>

              <div className="form-field">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Book
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
