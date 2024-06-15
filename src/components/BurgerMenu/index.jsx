import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function BurgerMenu({ setIsSidebarOpen }) {
  const burgerRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burgerRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 55,
        onLeave: () => {
          gsap.to(burgerRef.current, {
            scale: 0,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burgerRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "poweri.out",
          });
        },
      },
    });
  }, []);

  return (
    <div
      ref={burgerRef}
      className={styles.burgerMenu}
      onClick={() => setIsSidebarOpen(true)}
    >
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
    </div>
  );
}
