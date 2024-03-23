import styles from './style.module.css'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { scrollcards } from '@/Data/scrollcards'
import Image from 'next/image'
import nextConfig from '../../../next.config'

export default function ScrollCards() {

  const [isMobile,setIsMobile] = useState(false)

  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<1208)
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return () => window.removeEventListener("resize",handleResize)
  },[])

  const rotateLeftRange = [0, 5.76]
  const rotateRightRange = [0, -7.26] 

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target:container,
    offset:['start end','center center']
  })

  const rotateLeft = useTransform(scrollYProgress,[0,1],rotateLeftRange) 
  const rotateRight = useTransform(scrollYProgress,[0,1],rotateRightRange) 


  return (
    <div ref={container} className={styles.scrollCardsContainer}>
      <motion.div
        style={{
          rotate:rotateLeft,
          translateX:isMobile?25:175,
        }} 
        className={`${styles.card} ${styles.firstCard}`}
      >
        <Image 
          src={`${nextConfig.basePath}/images/${scrollcards[1]}`}
          width={375}
          height={550}
          alt='scroll-card-image'
          loading='eager'
        />
      </motion.div>
      <motion.div
        style={{
          rotate:rotateRight,
          translateX:isMobile?-25:25,
          translateY:isMobile?-70:-70,
        }} 
        className={`${styles.card} ${styles.secondCard}`}
      >
        <Image 
          src={`${nextConfig.basePath}/images/${scrollcards[0]}`}
          width={375}
          height={550}
          alt='scroll-card-image'
          loading='eager'
        />
      </motion.div>
    </div>
  )
}
