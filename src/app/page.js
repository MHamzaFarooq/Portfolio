"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Work from "@/components/Work";
import BurgerMenu from "@/components/BurgerMenu";
import SkillSet from "@/components/SkillSet";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Footers from "@/components/Footer";
import Marquee from "@/components/Marquee";
import HeaderBottom from "@/components/HeaderBottom";

import { useEffect, useRef, useState } from "react";
export default function Home() {
  const headerOptions = ["Work", "Skills", "Experience", "Testimonials"];
  const [isMobile, setIsMobile] = useState(false);

  const footerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        mobile: {
          smooth: true,
        },
        smoothMobile: true,
        smooth: true,
      });
    })();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobile && <Header headerOptions={headerOptions} />}
      {!isMobile && (
        <HeaderBottom headerOptions={headerOptions} footerRef={footerRef} />
      )}
      {isMobile && <BurgerMenu />}
      <div className={styles.main}>
        <Landing isMobile={isMobile} />
        <Work />
        <SkillSet isMobile={isMobile} />
        <Experience />
        <AboutMe />
      </div>
      <div className={styles.control} id="testimonials">
        <Marquee />
      </div>
      <div className={styles.main}>
        <Testimonials />
        <Footers footerRef={footerRef} />
      </div>
    </>
  );
}
