"use client";

import { useEffect, useState } from "react";
import Delete from "../../../public/admin/delete(2).png"
import Image from "next/image";

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



  // Delete a reservation 

  const deleteItem = async (id: string) => {
    console.log(id)
    try {

      const response = await fetch("/api/reservation", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id)
      })

      const deletedItem = await response.json()
      const res = await fetch("/api/admin/reservation");
      const json = await res.json();
      setData(json.data);



      if (!response.ok) {
        throw new Error(deletedItem.message)
      }

    }
    catch (error) {
      console.log("Error", error)
    }
  }


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
          <th>Delete</th>
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
            <td>
              <Image
                className="deleteImg"
                src={Delete}
                alt="delete entry"
                width={20}
                height={20}
                onClick={() => deleteItem(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
