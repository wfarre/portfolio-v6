import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useCursor = () => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [sizes, setSizes] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSizes({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursor({
        x: e.clientX / sizes.width - 0.5,
        y: e.clientY / sizes.height - 0.5,
      });
    });
  }, [sizes]);

  return [cursor, sizes];
};
