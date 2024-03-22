import styles from './parallax.module.scss'
import Image from 'next/image'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import useDimension from '@/useDimension'
import { skills } from '@/Data/skills'
import nextConfig from '../../../next.config'

export default function Parallax() {
  const container = useRef(null)
  const { height } = useDimension();
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end','end start']
  })
  const y = useTransform(scrollYProgress, [0,1],[0,height*1.75])
  const y2 = useTransform(scrollYProgress, [0,1],[0,height*3.3])
  const y3 = useTransform(scrollYProgress, [0,1],[0,height*1.25])
  const y4 = useTransform(scrollYProgress, [0,1],[0,height*3.3])
  return (
    <>
    <div className={styles.parallax}>
      <div ref={container} className={styles.gallery}>
        <Column images={[skills[0],skills[1]]} y={y}/>
        <Column images={[skills[2],skills[3]]} y={y3}/>
      </div>
    </div>
    </>
  )
}

const Column = ({images, y=0})=>{
  return (
    <motion.div style={{y}} className={styles.column}>
      {
        images.map((image,index)=>{
          const {src,color}=image;
          return <div key={index} className={styles.imageContainer} style={{backgroundColor:color}}>
            <Image
              src={`${nextConfig.basePath}/images/${src}`}
              width={200}
              height={200}
              alt={`${image.name}`} 
              loading='eager' 
            />
          </div>
        })
      }
    </motion.div>
  )
}
