"use client"

import Image from "next/image";
import "./menu2.css";
import Animation from "../../../components/effects/animations";
import MainImg from "../../../../public/menu/menuhero.jpg";
import menuDrinks from "../../../../public/menu/menu-1.jpg";
import menuFood from "../../../../public/menu/menu-2.jpg";
import menuPizza from "../../../../public/menu/menu-3.jpg";
import { menuData } from "@/data/menu";
import { act, useState } from "react";

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
          sizes="100vw"
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
              className="menu-btn"
              style={{
                backgroundColor: active === btn.id ? "#954747" : "transparent",
                color: active === btn.id ? "white" : "black",
                transition: "0.3s"
              }}
              onClick={() => setActive(btn.id)}
            >{btn.label}
            </button>
          ))}
        </div>
      </section>




      <section className="menu-items">

        <div className="menu-lists"> 
          {active === 1 || active == 2 ? (
            <div>
              <div className="menu-title">
                <h2>Drinks</h2>
              </div>
              <div className="menu-grid">{menuData.drinks.map(item => (
                <div key={item.id} className="grid-item">
                  <Image 
                    src={menuDrinks}
                    alt="drink"
                    width={200}
                    height={100}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}</div>
            </div>
          ) : null}
        </div>

        <div className="menu-lists"> 
          {active === 1 || active == 3 ? (
            <div>
              <div className="menu-title">
                <h2>Foods</h2>
              </div>
              <div className="menu-grid">{menuData.food.map(item => (
                <div key={item.id} className="grid-item">
                  <Image 
                    src={menuFood}
                    alt="drink"
                    width={200}
                    height={100}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}</div>
            </div>
          ) : null}
        </div>


        <div className="menu-lists"> 
          {active === 1 || active == 4 ? (
            <div>
              <div className="menu-title">
                <h2>Baked</h2>
              </div>
              <div className="menu-grid">{menuData.pizza.map(item => (
                <div key={item.id} className="grid-item">
                  <Image 
                    src={menuPizza}
                    alt="drink"
                    width={200}
                    height={100}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}</div>
            </div>
          ) : null}
        </div>

         
        


      </section>














    </main>
  );
}

