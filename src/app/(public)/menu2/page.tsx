"use client"

import Image from "next/image";
import "./menu2.css";
import Animation from "../../../components/effects/animations";
import MainImg from "../../../../public/menu/menuhero.jpg";
import menuDrinks from "../../../../public/menu/menu-1.jpg";
import menuFood from "../../../../public/menu/menu-2.jpg";
import menuPizza from "../../../../public/menu/menu-3.jpg";
import { menuData } from "@/data/menu";
import { useState } from "react";
import button from "@/components/ui/button";

export default function MenuPage() {

  let [active, setActive] = useState(null)

  const buttons = [
    { id: 1, label: "All" },
    { id: 2, label: "Drinks" },
    { id: 3, label: "Foods" },
    { id: 4, label: "Baked" }
  ]

  return (
    <main className="menu-page">
      <Animation />

      {/* HERO */}
      <section className="menu-hero">
        <Image
          src={MainImg}
          alt="Our Menu"
          fill
          sizes="100vw"
          priority
          className="menu-img"
        />
        <div className="menu-text">
          <h1>Our Menu</h1>
          <p>Carefully crafted flavors, served with heart.</p>
        </div>
      </section>



      {/* MENU */}
      <section className="menu-content">
        <div className="filter">
          {buttons.map(btn => (
            <button
              key={btn.id}
              className="menu-btn"
            >{btn.label}
            </button>
          ))}
        </div>
      </section>















    </main>
  );
}

