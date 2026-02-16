"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
// import Logo from "../../../../public/header/logo4.png";
import Logo from "../../../../public/header/hello.png";

interface LinkType {
  id: number,
  name: string,
  href: string
}

const links: LinkType[] = [
  { id: 1, name: "Menu", href: "/menu" },
  { id: 3, name: "Our Story", href: "/story" },
  { id: 2, name: "Book", href: "/book" },
];

export default function Header() {

  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);


  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setSticky(true);
  //     }
  //     else {
  //       setSticky(false)
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }

  // }, []);



  return (
    <div className={`header ${sticky ? "scrolled" : ""}`}>

      <div className="logo">
        <Link href="/">
          <Image
            alt="logo"
            src={Logo}
            width={180}
            height={100}
            className="logo-img"
            onClick={() => setMenuOpen(false) }
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        {links.map(link => {
          const active = path === link.href || path.startsWith(link.href);

          return (
            <Link
              key={link.id}
              href={link.href}
              className={active ? "act-link" : "link"}
            >
              {link.name}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map(link => {
            const active = path === link.href || path.startsWith(link.href);

            return (
              <Link
                key={link.id}
                href={link.href}
                className={active ? "act-link" : "link"}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}

    </div>
  )
}
