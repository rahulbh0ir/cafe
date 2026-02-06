"use client";

import { useEffect, useState } from "react";

type Reservation = {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  createdAt: string;
};

export default () => {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReservations() {
      try {
        const res = await fetch("/api/admin/reservation");
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.message);
        }
        setData(json.data);
      
      } catch (err: any) {
        setError(err.message || "Failed to load reservations");
      } finally {
        setLoading(false);
      }
    }

    fetchReservations();
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p className="error">{error}</p>;


  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date</th>
          <th>Time</th>
          <th>Booked At</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{new Date(item.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
