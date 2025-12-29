import "./globals.css";
import Footer from "./(pages)/footer/page";
import Header from "./(pages)/header/page";

export default ({ children }: { children: React.ReactNode }) => {

  return (
    <html>

      <body>

      <header className="header">
        <Header />
      </header>

      <div className="main">
        {children}
      </div>

      <footer className="footer">
        <Footer />
      </footer>

      </body>

    </html>
  )
}
