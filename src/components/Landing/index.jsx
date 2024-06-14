import styles from "./style.module.css";
import nextConfig from "../../../next.config";
import Image from "next/image";
import { landing } from "@/Data/landing";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Landing({ isMobile, setIsSelected }) {
  const landingRef = useRef(null);
  const inView = useInView(landingRef);
  useEffect(() => {
    if (inView) {
      setIsSelected(undefined);
    }
  }, [inView, setIsSelected]);
  return (
    <div className={styles.Landing}>
      <div className={styles.landingFirst}>
        <div className={styles.name} ref={landingRef}>
          I&apos;m {landing.name}
        </div>
        <Image
          className={styles.image}
          src={`${nextConfig.basePath}/images/${landing.pfp}`}
          width={300}
          height={300}
          alt="landing page image"
        />
      </div>
      <div className={styles.landingSecond}>
        <span className={styles.span}>{landing.designation.span}</span>
        {landing.designation.rest}
      </div>
      <div className={styles.desc}>{landing.desc}</div>
      {isMobile && <div className={styles.contactButton}>Contact</div>}
    </div>
  );
}
