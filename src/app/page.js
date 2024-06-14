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
  const [isSelected, setIsSelected] = useState(null);
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
      {!isMobile && (
        <Header
          headerOptions={headerOptions}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {!isMobile && (
        <HeaderBottom
          headerOptions={headerOptions}
          footerRef={footerRef}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      )}
      {isMobile && <BurgerMenu />}
      <div className={styles.main}>
        <Landing isMobile={isMobile} setIsSelected={setIsSelected} />
        <Work setIsSelected={setIsSelected} />
        <SkillSet isMobile={isMobile} setIsSelected={setIsSelected} />
        <Experience setIsSelected={setIsSelected} />
        <AboutMe />
      </div>
      <div className={styles.control} id="testimonials">
        <Marquee />
      </div>
      <div className={styles.main}>
        <Testimonials setIsSelected={setIsSelected} />
        <Footers footerRef={footerRef} />
      </div>
    </>
  );
}
