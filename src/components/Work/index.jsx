import styles from './style.module.css'
import { work } from '@/Data/work'
import SwiperWork from '../Swiper-Work'

export default function Work() {
  return (
    <div className={styles.work}>
      <div className={styles.helper}>
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
  )
}
