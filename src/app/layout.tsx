import "./globals.css";
import Footer from "./(public)/footer/page";
import Header from "./(public)/header/page";
import { Sacramento , Poiret_One, Delicious_Handrawn } from "next/font/google";

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

const delicious = Delicious_Handrawn({
  variable : "--delicious",
  weight : ["400"]
})

const sacramento = Sacramento({
  variable : "--sacramento",
  weight : ["400"]
})


export default ({ children }: { children: React.ReactNode }) => {

  return (
    <html data-scroll-behavior="smooth" className={`${lavish.variable} ${poiret.variable} ${delicious.variable} ${sacramento.variable}`}>
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
