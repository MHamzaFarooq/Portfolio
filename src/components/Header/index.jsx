import { useState } from 'react'
import styles from './style.module.css'

export default function Header() {

  const [isSelected,setIsSelected] = useState(0)  
  const headerOptions = ["Work","Skills","Experience","Resume"]  
  return (
    <>
    <header className={styles.header}>
        {headerOptions.map((headerOption,index)=>{
            return(
                <div 
                    key={index} 
                    className={styles.headerOption}
                    style={{color:isSelected===index?'yellow':'white'}}
                    onClick={()=>setIsSelected(index)}
                >
                    {headerOption}
                </div>
            )
        })}
    </header>
    <button className={styles.contactButton}>Contact</button>
    </>
  )
}
