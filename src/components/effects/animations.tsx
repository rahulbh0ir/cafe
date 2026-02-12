"use client";

import { useEffect } from "react";

export default function ScrollSystem() {
  useEffect(() => {

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
      revealObserver.disconnect();
    };

  }, []);

  return null;
}
