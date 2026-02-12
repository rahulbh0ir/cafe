"use client";

import { useEffect } from "react";

export default function ScrollSystem() {
  useEffect(() => {

    const header = document.querySelector(".header");
    const hero = document.querySelector("section");

    /* HEADER OBSERVER */
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          header?.classList.add("scrolled");
        } else {
          header?.classList.remove("scrolled");
        }
      },
      { threshold: 0 }
    );

    if (hero) headerObserver.observe(hero);




    
    /* REVEAL OBSERVER */
    const elements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      headerObserver.disconnect();
      revealObserver.disconnect();
    };

  }, []);

  return null;
}
