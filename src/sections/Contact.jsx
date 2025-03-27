import React, { useRef } from "react";
import Button from "../components/ButtonLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactCard = useRef();
  const li1 = useRef();
  const li2 = useRef();
  const li3 = useRef();

  useGSAP(() => {
    gsap.from([li1.current, li2.current, li3.current], {
      scrollTrigger: {
        trigger: contactCard.current,
        toggleActions: "restart none none none",
        start: "-20% center",
        end: "+=160% center",
        scrub: 0.5,
        // markers: true,
      },
      opacity: 0,
      y: -100,
      stagger: 0.2,
    });
  });
  return (
    <>
      <section
        id="contactSection"
        className="px-desktop-responsive mt-20 min-h-[100vh] text-center"
      >
        <header className="mb-12 pt-12 lg:pt-40">
          <h2 className="font-title text-5xl">Contact Information</h2>
        </header>
        <ul
          ref={contactCard}
          className="flex flex-col justify-center gap-4 lg:flex-row"
        >
          <li ref={li1} className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Address</h3>
            <p>Sanmin District, Kaohsiung,</p>
            <p>807 Taiwan</p>
          </li>
          <li ref={li2} className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Phone number</h3>
            <p>+886-(0)933-730-512</p>
          </li>
          <li ref={li3} className="rounded-xl bg-slate-700 px-8 py-5">
            <h3 className="font-bold">Email</h3>
            <p>william.farre@gmail.com</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contact;
