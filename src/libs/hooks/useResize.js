import { useEffect, useState } from "react";

export const useResize = () => {
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSizes({ width: window.innerWidth, height: window.innerHeight });
    });
  });

  return sizes;
};
