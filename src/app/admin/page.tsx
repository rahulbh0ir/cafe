import TableCollection from "./table";
import "./admin.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/header/logo4.png";
import Spoon from "../../../public/admin/spoonW.png"

export default async () => {
  return (
    <main className="admin-page">

      <section className="admin-feature">
        <div className="admin-brand">
          <Link href="/">
            <Image
              alt="logo"
              src={Logo}
              width={120}
              height={70}
              className="logo-img"
            />
          </Link>
        </div>
        <div className="admin-controls">
          <div className="control-item">
            <Image
              src={Spoon}
              alt="Table Reservation"
              width={30}
              height={30}
            />
            <p>Reservations</p>
          </div>
        </div>
      </section>

      <section className="admin-content">
        <div className="admin-navbar">

          <h3>Tabel Reservations</h3>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="admin-data">
          <TableCollection />
        </div>
      </section>

    </main>
  );
}
