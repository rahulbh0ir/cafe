"use client"

import Header from "../header/page";
import Footer from "../footer/page";
import { usePathname } from "next/navigation";

export default ({ children }: { children: React.ReactNode }) => {

  let path = usePathname();
  let isPath = path.startsWith("/admin")
  console.log(isPath)

  return (
    <>
      {!isPath && <Header />}

      <div className="main-content">
        {children}
      </div>

      {!isPath && <Footer />}
    </>
  )
}

