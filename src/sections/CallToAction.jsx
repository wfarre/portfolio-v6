import React from "react";
import ButtonLink from "../components/ui/ButtonLink";

const CallToAction = () => {
  return (
    <section>
      <header className="flex flex-col items-center justify-center gap-4 bg-white py-6 text-center text-slate-950">
        <h2 className="text-3xl font-bold italic lg:text-5xl">
          Let's dream together!
        </h2>
        <ButtonLink
          buttonText={"Send Email"}
          type={"primary"}
          link={"mailto:william.farre@gmail.com"}
        />
      </header>
    </section>
  );
};

export default CallToAction;
