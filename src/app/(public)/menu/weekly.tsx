"use client";

import { useEffect, useState } from "react";
import type { MenuItem } from "@/data/menu";

export default function WeeklySpecials() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeekly = async () => {
      try {
        const res = await fetch("/api/weekly-specials");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setItems(data);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeekly();
  }, []);

  if (loading || items.length === 0) return null;

  return (
    <section className="weekly-section reveal">
      <div className="weekly-container">
        <div className="weekly-header">
          <h2>Weekly Specials</h2>
          <p>Chef’s limited-time favorites you shouldn’t miss.</p>
        </div>

        <ul className="weekly-list">
          {items.map((item) => (
            <li key={item.id} className="weekly-item">
              <div className="weekly-item-left">
                <span className="weekly-name">{item.name}</span>

                <div className="weekly-meta">
                  {item.isPopular && (
                    <span className="badge popular">Popular</span>
                  )}
                  {item.isVeg && (
                    <span className="badge veg">Veg</span>
                  )}
                  <span className="prep-time">{item.prepTime}</span>
                </div>
              </div>

              <span className="weekly-price">₹{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
