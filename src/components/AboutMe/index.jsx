import styles from './style.module.css'
import { about } from '@/Data/about'
import Image from 'next/image'
import nextConfig from '../../../next.config'
import ScrollCards from '../ScrollCards'
import { useEffect, useState } from 'react'
export default function AboutMe() {
  const [isMobile,setIsMobile] = useState(false)
  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<800)
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return ()=> window.removeEventListener("resize",handleResize)
  },[])
  return (
    <div className={styles.about}>
        <div className={styles.helper}>
            <div className={styles.left}>
              <ScrollCards />
              {isMobile && <SocialsContainer/>}
              {isMobile && <div className={styles.downloadResumeMobile}>Download Resume</div>}
            </div>
            <div className={styles.right}>
                <div className={styles.heading}>
                  <span className={styles.span}>About </span>
                  Me
                </div>
                <div className={styles.somethinglol}>
                  <div className={styles.desc}>{about.desc}</div>
                  {!isMobile && <SocialsContainer/>}
                </div>
                {!isMobile && <div className={styles.downloadResume}>
                  Download Resume
                </div>}
            </div>
        </div>
    </div>
  )
}

function SocialsContainer() {
  return (
    <div className={styles.socialsContainer}>
      {about.socials.map((social, index) => {
        return <a key={index} href={`${social.src}`} target='_blank'>
            <Image src={`${nextConfig.basePath}/images/${social.imgsrc}`} width={26} height={26} alt={`${social.imgsrc}`} />
          </a>;
        })}
    </div>);
}
  