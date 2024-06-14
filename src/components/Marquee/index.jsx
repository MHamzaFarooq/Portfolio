import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={slider}>
        <p ref={firstText}>
          Testimonials <span className={styles.span}>-{`>`}</span> Testimonials{" "}
          <span className={styles.span}>-{`>`}</span> Testimonials{" "}
          <span className={styles.span}>-{`>`}</span>{" "}
        </p>
        <p ref={secondText}>
          Testimonials <span className={styles.span}>-{`>`}</span> Testimonials{" "}
          <span className={styles.span}>-{`>`}</span> Testimonials{" "}
          <span className={styles.span}>-{`>`}</span>{" "}
        </p>
      </div>
    </div>
  );
}
