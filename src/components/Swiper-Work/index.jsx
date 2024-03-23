import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import nextConfig from '../../../next.config.js';
import Image from 'next/image.js';
import styles from './style.module.css'
import { swiperWork } from './Data.js';

import './button.css'

SwiperCore.use([Navigation]);

export default function SwiperWork() {
  const interleaveOffset = 0.5;
  return (
    <div className={styles.control}>
      <Swiper
        allowTouchMove={false}
        watchSlidesProgress={true}  
        speed={900}
        navigation={true}
        className="swiperWork"
        onProgress={(swiper)=>{
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress= (swiper.slides[i]).progress;
            let innerOffset = swiper.width * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;
            (swiper.slides[i].querySelector(`.${styles.slideInner}`)).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
          }
        }}
        onTouchStart={(swiper)=>{
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = '';
          }
        }}
        onSetTransition={(swiper,speed)=>{
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + 'ms';
            (swiper.slides[i].querySelector(`.${styles.slideInner}`)).style.transition = speed + 'ms';
          }
        }}>
      {
        swiperWork.map((item,index)=>{
          return(
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideInner}>
              <Image 
                src={`${nextConfig.basePath}/images/${item.src}`}
                alt='horizon swiper image'
                width={600}
                height={648}
                loading='eager'
              />
            </div>
            <div className={`${styles.linkButton} linkButton`}>
              <Image 
                src={`${nextConfig.basePath}/images/linkButton.svg`}
                width={50}
                height={50}
                alt='link button arrow image'
              />
            </div>
            <div className={`${styles.workName} workName`}>{item.title}</div>
        </SwiperSlide>
        )})
      }
      </Swiper>
    </div>
  )
}
