"use client"

import { useEffect } from "react";
import Image from "next/image";
import Interior from "../../../public/home/mainInterior.jpg";
import Int1 from "../../../public/home/int1.jpg";
import Int2 from "../../../public/home/int2.jpg";

export default function Carousel() {

  useEffect(() => {
    let i = 0;
    const slides = document.querySelector(".gallery-main");
    const dots = document.querySelectorAll(".dots button");

    if (!slides) return;
    
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => slides.scrollTo({
        left: slides.clientWidth * i,
        behavior: "smooth"
      }))
    })
    
    slides.addEventListener("scroll", () => {
      let index = Math.round(slides.scrollLeft / slides.clientWidth)
      
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })
      dots[index].classList.add("active")
    })

    function changeSlide(i : number) {
      slides?.scrollTo({
        left : slides.clientWidth * i,
        behavior: "smooth"
      })
    }

    function autoChange() {
      i++;
      if(i >= 3 ) {
        i = 0
      }
      changeSlide(i)
    }


    const interval = setInterval( autoChange , 3000)


    return () => {
      clearInterval(interval);
    }

  }, []);

  return (
    <div>
      <div className="gallery-main reveal">
        <Image src={Interior} alt="cafe interior" sizes="100vw" />
        <Image src={Int1} alt="cafe interior" sizes="100vw" />
        <Image src={Int2} alt="cafe interior" sizes="100vw" />
      </div>

      <div className="dots">
        <button data-index="0" className="active"></button>
        <button data-index="1"></button>
        <button data-index="2"></button>
      </div>
    </div>
  );
}