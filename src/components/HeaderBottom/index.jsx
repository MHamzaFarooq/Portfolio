import { useState, useLayoutEffect, useRef, useEffect } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeaderBottom({
  headerOptions,
  footerRef,
  isSelected,
  setIsSelected,
}) {
  const topHeader = useRef(null);
  const contactButton = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 50,
        onLeave: () => {
          gsap.to(topHeader.current, {
            scale: 1,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onEnterBack: () => {
          gsap.to(topHeader.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
      },
    });
    gsap.to(topHeader.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(topHeader.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(topHeader.current, {
            scale: 1,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
      },
    });
    gsap.to(contactButton.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "50px top",
        end: "top top",
        onLeave: () => {
          gsap.to(contactButton.current, {
            scale: 1,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onEnterBack: () => {
          gsap.to(contactButton.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
      },
    });

    gsap.to(contactButton.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(contactButton.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(contactButton.current, {
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
      <button
        className={styles.contactButton}
        onClick={handleContact}
        ref={contactButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          height="32px"
          width="32px"
          role="img"
          alt="Chat icon"
          className="tawk-min-chat-icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
          ></path>
        </svg>
      </button>
    </>
  );
}
