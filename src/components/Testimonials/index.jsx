import styles from "./style.module.css";
import Marquee from "../Marquee";
import { testimonials } from "@/Data/testimonials";
import Image from "next/image";
import nextConfig from "../../../next.config";
export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
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
