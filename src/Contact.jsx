import React, { useRef } from "react";
import Button from "./components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactCard = useRef();

  useGSAP(() => {
    gsap.from([...contactCard.current.querySelectorAll("li")], {
      scrollTrigger: {
        trigger: contactCard.current,
        pin: true,
        pinSpacing: 0,
        toggleActions: "restart pause pause pause",
        scrub: 0.5,
        markers: true,
      },
      opacity: 0,
      // stagger: 0.5,
    });
  });
  return (
    <>
      <section className="px-desktop-responsive mt-20 min-h-[100vh] text-center">
        <header className="mb-12 pt-40">
          <h2 className="font-title text-5xl">Contact Information</h2>
        </header>
        <ul ref={contactCard} className="flex justify-between">
          <li className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Address</h3>
            <p>Sanmin District, Kaohsiung,</p>
            <p>807 Taiwan</p>
          </li>
          <li className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Phone number</h3>
            <p>+886-(0)933-730-512</p>
          </li>
          <li className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Email</h3>
            <p>william.farre@gmail.com</p>
          </li>
        </ul>
      </section>
      {/* <section>
        <header className="flex flex-col items-center justify-center gap-4 bg-white py-6 text-center text-slate-950">
          <h2 className="text-4xl font-bold italic">Let's dream together!</h2>
          <Button buttonText={"Send Email"} type={"primary"} />
        </header>
      </section> */}
    </>
  );
};

export default Contact;
