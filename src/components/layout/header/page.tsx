import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/images/logo2.png"
export default () => {

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

      <div className="links">
        <Link href="/menu">Menu</Link>
        <Link href="/book">Book</Link>
        <Link href="/story">Our Story</Link>
      </div>
    </div>
  )
}
