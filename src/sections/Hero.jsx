import React, { Suspense, useRef } from "react";
const Sns = React.lazy(() => import("../components/ui/Sns"));

const Hero = () => {
  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  // const mainTitleRef = useRef();
  // const headerFooterRef = useRef();

  // useGSAP(() => {
  //   gsap.from(skill1.current, { opacity: 0, y: -16, duration: 0.9 });
  //   gsap.from(skill2.current, {
  //     opacity: 0,
  //     y: -16,
  //     duration: 0.9,
  //     delay: 0.3,
  //   });
  //   gsap.from(skill3.current, {
  //     opacity: 0,
  //     y: -16,
  //     duration: 0.9,
  //     delay: 0.6,
  //   });
  // gsap.from(mainTitleRef.current, {
  //   opacity: 0,
  //   scale: 0.8,
  //   duration: 0.9,
  //   delay: 0.9,
  // });
  // gsap.from(headerFooterRef.current, {
  //   y: 16,
  //   opacity: 0,
  //   duration: 0.9,
  //   delay: 0.6,
  // });
  // });
  return (
    <header id="heroSection" className="header">
      <ul className="font-title mt-25 flex justify-between gap-2 text-sm sm:mt-20 sm:flex-col sm:text-lg">
        <li ref={skill1} className="skill">
          FRONTEND
        </li>
        <li ref={skill2} className="skill">
          BACKEND
        </li>
        <li ref={skill3} className="skill">
          UI/UX
        </li>
      </ul>
      <div className="title-wrapper relative mx-auto max-w-[1440px] text-center">
        <h1
          // ref={mainTitleRef}
          // className="font-title text-[calc((116_/_1440)_*_100vw)] leading-none tracking-wide text-white uppercase 2xl:text-[144px]"
          className="font-title leading-none tracking-wide text-white uppercase"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
          }}
        >
          William Farre
        </h1>
        <div
          // ref={headerFooterRef}
          className="mt-2 flex flex-col flex-wrap items-center justify-between sm:flex-row"
        >
          <h2 className="font-title mb-4 text-sm sm:mb-0 sm:text-lg">
            FRONTEND DEVELOPER | REACT
          </h2>
          <Suspense fallback={null}>
            <Sns />
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Hero;
