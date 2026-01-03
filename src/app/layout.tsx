import "./globals.css";
import Footer from "./footer/page";
import Header from "./header/page";
import { Sacramento , Poiret_One } from "next/font/google";

export const metadata = {
  title: "Bean There",
  description: "Cafe Restaurant",
}

const lavish = Sacramento({
  variable : "--lavish",
  weight : ["400"],
});

const poiret = Poiret_One({
  variable : "--poiret",
  weight : ["400"],
})


export default ({ children }: { children: React.ReactNode }) => {

  return (
    <html className={`${lavish.variable} ${poiret.variable}`}>
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
