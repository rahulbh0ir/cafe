"use client"


import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo2.png";
import { usePathname } from "next/navigation";

interface Link {
  id: number,
  name: string,
  href: string
}

const links: Link[] = [
  { id: 1, name: "Menu", href: "/menu" },
  { id: 2, name: "Book", href: "/book" },
  { id: 3, name: "Our Story", href: "/story" },
];


export default () => {

  const path = usePathname();

  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <Image
            alt="logo"
            src={Logo}
            width={180}
            height={100}
          />
        </Link>
      </div>

      <div>
        {links.map(link => {

          const active = path === link.href || path.startsWith(link.href);
          
          return (
            <Link
              key={link.id}
              href={link.href}
              className={active ?  "act-link" : "link"}
            >
              {link.name}
            </Link>
          )
        }
        )}
      </div>
      
    </div>
  )
}
