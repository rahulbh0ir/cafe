import "./globals.css";
import Footer from "./footer/page";
import Header from "./header/page";


export const metadata = {
  title: "Bean There",
  description: "Cafe Restaurant"
}


export default ({ children }: { children: React.ReactNode }) => {

  return (
    <html>
      
      <body>

        <header>
          <Header />
        </header>

        <div className="main-content">
          {children}
        </div>

        <footer>
          <Footer />
        </footer>

      </body>

    </html>
  )
}
