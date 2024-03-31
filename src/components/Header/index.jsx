import { useState } from 'react';
import styles from './style.module.css';

export default function Header() {
  const [isSelected, setIsSelected] = useState(0);
  const headerOptions = ["Work", "Skills", "Experience", "Resume"];

  const handleHeaderOptionClick = (index) => {
    setIsSelected(index);
    const sectionId = headerOptions[index].toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 50
        window.scrollTo({
            top:section.offsetTop + offset,
            behavior:"smooth"
        })
    }
  };

  return (
    <>
      <header className={styles.header}>
        {headerOptions.map((headerOption, index) => (
          <div
            key={index}
            className={styles.headerOption}
            style={{ color: isSelected === index ? 'yellow' : 'white' }}
            onClick={() => handleHeaderOptionClick(index)}
          >
            {headerOption}
          </div>
        ))}
      </header>
      <button className={styles.contactButton}>Contact</button>
    </>
  );
}
