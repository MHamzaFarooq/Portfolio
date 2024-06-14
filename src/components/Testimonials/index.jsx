import styles from "./style.module.css";
import Marquee from "../Marquee";
import { testimonials } from "@/Data/testimonials";
import Image from "next/image";
import nextConfig from "../../../next.config";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
export default function Testimonials({ setIsSelected }) {
  const testRef = useRef(null);
  const inView = useInView(testRef);

  useEffect(() => {
    if (inView) {
      setIsSelected(3);
    }
  }, [inView, setIsSelected]);

  return (
    <div className={styles.testimonials} ref={testRef}>
      <div className={styles.box}>
        {testimonials.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.imageContainer}>
                <Image
                  src={`${nextConfig.basePath}/images/${item.pfp}`}
                  width={96}
                  height={96}
                  alt="testimonial-image"
                />
              </div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
