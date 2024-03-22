import styles from './style.module.css'
export default function BurgerMenu() {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
    </div>
  )
}
