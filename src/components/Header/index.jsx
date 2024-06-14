import { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Header({ headerOptions }) {
  const [isSelected, setIsSelected] = useState(0);
  const topHeader = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 50,
        onLeave: () => {
          gsap.to(topHeader.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onEnterBack: () => {
          gsap.to(topHeader.current, {
            scale: 1,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
      },
    });
  }, []);

  const handleHeaderOptionClick = (index) => {
    setIsSelected(index);
    const sectionId = headerOptions[index].toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 50;
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  const handleContact = () => {
    const offset = 50;
    const section = document.getElementById("contact");
    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={styles.header} ref={topHeader}>
        {headerOptions.map((headerOption, index) => (
          <div
            key={index}
            className={styles.headerOption}
            style={{ color: isSelected === index ? "yellow" : "white" }}
            onClick={() => handleHeaderOptionClick(index)}
          >
            {headerOption}
          </div>
        ))}
      </header>
      <button className={styles.contactButton} onClick={handleContact}>
        Contact
      </button>
    </>
  );
}
