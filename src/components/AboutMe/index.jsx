import styles from './style.module.css'
import { about } from '@/Data/about'
import Image from 'next/image'
import nextConfig from '../../../next.config'
import ScrollCards from '../ScrollCards'
export default function AboutMe() {
  return (
    <div className={styles.about}>
        <div className={styles.helper}>
            <div className={styles.left}>
              <ScrollCards />
            </div>
            <div className={styles.right}>
                <div className={styles.heading}>
                  <span className={styles.span}>About </span>
                  Me
                </div>
                <div className={styles.somethinglol}>
                  <div className={styles.desc}>{about.desc}</div>
                  <div className={styles.socialsContainer}>
                    {
                      about.socials.map((social,index)=>{
                        return(
                          <a key={index} href={`${social.src}`} target='_blank'>
                            <Image
                              src={`${nextConfig.basePath}/images/${social.imgsrc}`}
                              width={26}
                              height={26}
                              alt={`${social.imgsrc}`}
                            />
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
                <div className={styles.downloadResume}>
                  Download Resume
                </div>
            </div>
        </div>
    </div>
  )
}
