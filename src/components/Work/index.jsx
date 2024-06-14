import styles from "./style.module.css";
import { work } from "@/Data/work";
import SwiperWork from "../Swiper-Work";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Work({ setIsSelected }) {
  const workRef = useRef(null);
  const inView = useInView(workRef);
  useEffect(() => {
    if (inView) {
      setIsSelected(0);
    }
  }, [inView, setIsSelected]);
  return (
    <div className={styles.work} id="work">
      <div className={styles.helper} ref={workRef}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <span className={styles.effect}>Some of </span>
            <span className={styles.span}> my</span>
            <div>work</div>
          </div>
          <div className={styles.desc}>{work.desc}</div>
        </div>
        <div className={styles.right}>
          <SwiperWork />
        </div>
      </div>
    </div>
  );
}
