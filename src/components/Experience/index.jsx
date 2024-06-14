import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { experience } from "@/Data/experience";
import { useInView } from "framer-motion";

export default function Experience({ setIsSelected }) {
  const expRef = useRef(null);
  const inView = useInView(expRef);
  useEffect(() => {
    if (inView) {
      setIsSelected(2);
    }
  }, [inView, setIsSelected]);
  return (
    <div className={styles.experience} id="experience" ref={expRef}>
      <div className={styles.helper}>
        <div className={styles.heading}>
          <span className={styles.span}>My </span>
          Experience
        </div>
        <div className={styles.rest}>
          {experience.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <div className={styles.itemLeft}>
                  <div className={styles.title}>
                    <div className={styles.titleItem}>{item.title}</div>
                    <div className={styles.titleItem}>{item.title}</div>
                  </div>
                  <div className={styles.company}>{item.company}</div>
                </div>
                <div className={styles.itemRight}>
                  <div className={styles.time}>{item.time}</div>
                  <div className={styles.type}>{item.type}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
