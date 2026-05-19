import TableCollection from "./table";
import "./admin.css";


export default async () =>   {
  return (
    <div className="admin-page">
      
    <section  className="admin-content">
      <h1>All Reservations</h1>
      <p>View all table bookings</p>

      <TableCollection />

    </section>
    </div>
  );
}
