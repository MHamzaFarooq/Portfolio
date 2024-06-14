import styles from "./style.module.css";
import { skillset } from "@/Data/skillset";
import Parallax from "../parallax/parallax";
import MobileParallax from "../parallaxMobile";
import { inView, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SkillSet({ isMobile, setIsSelected }) {
  const skillRef = useRef(null);
  const inView = useInView(skillRef);
  useEffect(() => {
    if (inView) {
      setIsSelected(1);
    }
  }, [inView, setIsSelected]);
  return (
    <div className={styles.skillset} id="skills">
      <div className={styles.helper}>
        <div className={styles.left}>
          {!isMobile && <Parallax />}
          {isMobile && <MobileParallax />}
        </div>
        <div className={styles.right}>
          <div className={styles.rightHelper}>
            <div className={styles.heading}>
              <span className={styles.span}>My</span> Skillset
            </div>
            <div className={styles.rest}>
              {skillset.map((skill, index) => {
                return (
                  <div key={index} className={styles.skill}>
                    <div className={styles.skillHeading}>{skill.heading}</div>
                    <div className={styles.skillDesc}>{skill.desc}</div>
                  </div>
                );
              })}
              <div ref={skillRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
