import "./globals.css";
import Footer from "../components/layout/footer/page";
import Header from "../components/layout/header/page";

export default ({ children }: { children: React.ReactNode }) => {

  return (
    <html>

      <body>

      <header>
        <Header />
      </header>

      <div className="main">
        {children}
      </div>

      <footer>
        <Footer />
      </footer>

      </body>

    </html>
  )
}
