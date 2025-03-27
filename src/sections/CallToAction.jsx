import React from "react";
import Button from "../components/Button";

const CallToAction = () => {
  return (
    <section>
      <header className="flex flex-col items-center justify-center gap-4 bg-white py-6 text-center text-slate-950">
        <h2 className="text-3xl font-bold italic lg:text-4xl">
          Let's dream together!
        </h2>
        <Button buttonText={"Send Email"} type={"primary"} />
      </header>
    </section>
  );
};

export default CallToAction;
