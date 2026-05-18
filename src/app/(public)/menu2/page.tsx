"use client"

import Image from "next/image";
import "./menu2.css";
import Animation from "../../../components/effects/animations";
import MainImg from "../../../../public/menu/menuhero.jpg";
import { menuData } from "@/data/menu";
import { useState } from "react";

export default function MenuPage() {

  let [active, setActive] = useState(1)

  console.log(active)

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
          sizes="500vw"
          priority
          className="menu-img"
        />
        <div className="menu-text">
          <h1>Our Menu</h1>
          <p>Carefully crafted flavors, served with heart.</p>
        </div>
      </section>



      {/* MENU CONTROL */}

      <section className="menu-control">
        <div className="filter">
          {buttons.map(btn => (
            <button
              key={btn.id}
              className={`menu-btn ${active === btn.id ? "active" : ""}`}
              onClick={() => setActive(btn.id)}
              // href={`#${btn.id}`}
            >{btn.label}
            </button>
          ))}
        </div>
      </section>




      {/* MENU ITEMS */}

      <section className="menu-items">

        {active === 1 || active == 2 ? (
          <div id="2" className="menu-lists">
            <div className="menu-title">
              <h2>Drinks</h2>
            </div>
            <div className="menu-grid">{menuData.drinks.map(item => (
              <div key={item.id} className="grid-item">
                <Image
                  src={item.img}
                  alt="drink"
                  width={500}
                  height={500}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-label">
                  <p>Calories {item.calories}</p>
                  <p>Price {item.price}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        ) : null}

        {active === 1 || active == 3 ? (
          <div  id="3" className="menu-lists">
            <div className="menu-title">
              <h2>Foods</h2>
            </div>
            <div className="menu-grid">{menuData.food.map(item => (
              <div key={item.id} className="grid-item">
                <Image
                  src={item.img}
                  alt="drink"
                  width={500}
                  height={500}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-label">
                  <p>Calories {item.calories}</p>
                  <p>Price {item.price}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        ) : null}


        {active === 1 || active == 4 ? (
          <div  id="4" className="menu-lists">
            <div className="menu-title">
              <h2>Baked</h2>
            </div>
            <div className="menu-grid">{menuData.pizza.map(item => (
              <div key={item.id} className="grid-item">
                <Image
                  src={item.img}
                  alt="drink"
                  width={500}
                  height={500}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-label">
                  <p>Calories {item.calories}</p>
                  <p>Price {item.price}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        ) : null}



      </section>




    </main>
  );
}

