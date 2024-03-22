import styles from './style.module.css'
import { skillset } from '@/Data/skillset'
import Parallax from '../parallax/parallax'

export default function SkillSet({isMobile}) {
  return (
    <div className={styles.skillset}>
        <div className={styles.helper}>
            { !isMobile &&  <div className={styles.left}><Parallax /></div>}
            <div className={styles.right}>
                <div className={styles.rightHelper}>
                    <div className={styles.heading}>
                        <span className={styles.span}>My</span> Skillset
                    </div>
                    <div className={styles.rest}>
                        {skillset.map((skill,index)=>{
                            return(
                                <div key={index} className={styles.skill}>
                                    <div className={styles.skillHeading}>{skill.heading}</div>
                                    <div className={styles.skillDesc}>{skill.desc}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
