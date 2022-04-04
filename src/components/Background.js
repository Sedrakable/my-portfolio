import React, { useRef, useEffect } from "react";

const Background = () => {
  const glow = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", move, true);
  });

  const move = (event) => {
    glow.current.classList.remove("pulse");
    const clone = glow.current.cloneNode(true);
    clone.classList.add("shutdown");

    glow.current.after(clone);

    track(clone, event);
    track(glow.current, event);

    setTimeout(() => {
      clone.remove();
      glow.current.classList.add("pulse");
    }, 1900);
  };

  const track = (glow, event) => {
    const glowHeight = glow.offsetHeight;
    const glowWidth = glow.offsetWidth;
    glow.style.top = `${event.clientY - glowHeight / 2}px`;
    glow.style.left = `${event.clientX - glowWidth / 2}px`;
  };

  return (
    <div className="background">
      <div className="grid"></div>
      <div ref={glow} className="cursor glow pulse"></div>
    </div>
  );
};

export default Background;
