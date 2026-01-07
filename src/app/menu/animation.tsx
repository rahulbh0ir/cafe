"use client";

import { useEffect } from "react";

export default () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".menu-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return null;
}
