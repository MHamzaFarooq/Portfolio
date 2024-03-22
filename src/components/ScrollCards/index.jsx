import styles from './style.module.css'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import { scrollcards } from '@/Data/scrollcards'
import Image from 'next/image'
import nextConfig from '../../../next.config'

export default function ScrollCards() {

  const rotateLeftRange = [0, 5.76]
  const rotateRightRange = [0, -7.26] 

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target:container,
    offset:['start end','end start']
  })

  const rotateLeft = useTransform(scrollYProgress,[0,1],rotateLeftRange) 
  const rotateRight = useTransform(scrollYProgress,[0,1],rotateRightRange) 

  return (
    <div ref={container} className={styles.scrollCardsContainer}>
      <motion.div
        style={{
          rotate:rotateLeft,
          translateX:175,
        }} 
        className={`${styles.card} ${styles.firstCard}`}
      >
        <Image 
          src={`${nextConfig.basePath}/images/${scrollcards[1]}`}
          width={375}
          height={550}
          alt='scroll-card-image'
        />
      </motion.div>
      <motion.div
        style={{
          rotate:rotateRight,
          translateX:25,
          translateY:-70,
        }} 
        className={`${styles.card} ${styles.secondCard}`}
      >
        <Image 
          src={`${nextConfig.basePath}/images/${scrollcards[0]}`}
          width={375}
          height={550}
          alt='scroll-card-image'
        />
      </motion.div>
    </div>
  )
}
