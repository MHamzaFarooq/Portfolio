import styles from "./style.module.css";
export default function BurgerMenu({ setIsSidebarOpen }) {
  return (
    <div className={styles.burgerMenu} onClick={() => setIsSidebarOpen(true)}>
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
      <div className={styles.bmLine}></div>
    </div>
  );
}
