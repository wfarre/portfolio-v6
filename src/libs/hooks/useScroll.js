import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(Math.round(window.scrollY / window.innerHeight));
      setScrollY(Math.round(window.scrollY));
    });
  }, []);

  return scrollY;
};
