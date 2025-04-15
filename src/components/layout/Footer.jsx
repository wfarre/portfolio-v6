import React from "react";
import Sns from "../ui/Sns";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-slate-950 pt-8">
      <Sns />
      <p className="mt-4 text-center text-xs">
        Designed and coded by William Farré©2025
      </p>
    </footer>
  );
};

export default Footer;
