import React, { useEffect } from "react";

const Stars = () => {
  useEffect(() => {
    const starsContainer = document.querySelector(".stars");
    if (starsContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return <div className="stars"></div>;
};

export default Stars;