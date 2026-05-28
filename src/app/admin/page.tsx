import TableCollection from "./table";
import "./admin.css";


export default async () => {
  return (
    <div className="admin-page">

      <section className="admin-feature">
        <div className="brand"></div>
        <div className="content"></div>
      </section>

      <section className="admin-content">
        <div className="admin-navbar"></div>
        <div className="container">
          <TableCollection />
        </div>
      </section>

    </div>
  );
}
