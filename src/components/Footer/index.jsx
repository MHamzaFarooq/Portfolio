import styles from "./style.module.css";
import { footer } from "@/Data/footer";
import { links } from "@/Data/about";
import Image from "next/image";
import nextConfig from "../../../next.config";
export default function Footers({ footerRef }) {
  const handleHeaderOptionClick = (index) => {
    const sectionId = footer[index].id;
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.helper}>
        <div className={styles.left}>
          <div className={styles.heading} ref={footerRef}>
            <span className={styles.span}>Let&apos;s </span>
            Connect
          </div>
          <div className={styles.mail}>{links.gmail}</div>
          <div className={styles.socialsContainer}>
            <a href={`${links.linkedin}`} target="_blank">
              <Image
                src={`${nextConfig.basePath}/images/linkedinFooter.svg`}
                width={28}
                height={28}
                alt="contact-image"
              />
            </a>
            <a href={`mailto:${links.gmail}`}>
              <Image
                src={`${nextConfig.basePath}/images/mail.svg`}
                width={28}
                height={28}
                alt="contact-image"
              />
            </a>
            <a href={`tel:${links.phone}`}>
              <Image
                src={`${nextConfig.basePath}/images/phone.svg`}
                width={28}
                height={28}
                alt="contact-image"
              />
            </a>
            <a href={`${links.instagram}`} target="_blank">
              <Image
                src={`${nextConfig.basePath}/images/instaFooter.svg`}
                width={28}
                height={28}
                alt="contact-image"
              />
            </a>
            <a href={`${links.facebook}`} target="_blank">
              <Image
                src={`${nextConfig.basePath}/images/facebookFooter.svg`}
                width={28}
                height={28}
                alt="contact-image"
              />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          {footer.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                onClick={() => handleHeaderOptionClick(index)}
              >
                <div className={styles.title}>
                  <div className={styles.titleItem}>{item.title}</div>
                  <div className={styles.titleItem}>{item.title}</div>
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
