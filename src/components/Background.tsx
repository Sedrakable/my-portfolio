import React, { useRef, useEffect } from "react";

const Background: React.FC<{ glowOn: boolean }> = ({ glowOn = true }) => {
  const glow = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("glowOn", glowOn);

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [glowOn]);

  const move = (event: MouseEvent) => {
    if (glowOn) {
      const glowElement = glow.current! as HTMLElement;
      glowElement.classList.remove("pulse");
      const clone = glowElement.cloneNode(true) as HTMLElement;
      clone.classList.add("shutdown");

      glowElement.after(clone);

      track(clone, event);
      track(glow.current, event);

      setTimeout(() => {
        clone.remove();
        glowElement.classList.add("pulse");
      }, 1000);
    }
  };

  const track = (glow, event) => {
    const glowHeight = glow.offsetHeight;
    const glowWidth = glow.offsetWidth;
    glow.style.top = `${event.clientY - glowHeight / 2}px`;
    glow.style.left = `${event.clientX - glowWidth / 2}px`;
  };

  return (
    <div className="background">
      <div ref={grid} className="grid"></div>
      <div ref={glow} className="cursor glow pulse"></div>
    </div>
  );
};

export default Background;
