import styles from "./style.module.css";
import { AnimatePresence, delay, motion } from "framer-motion";

const sidebarOptions = [
  {
    name: "Work",
    id: "work",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Testimonials",
    id: "testimonials",
  },
  {
    name: "Contact Us",
    id: "contact",
  },
];
const menuSlide = {
  initial: {
    x: "100%",
    borderRadius: "90% 10% 10% 90% / 50% 0% 0% 50%",
  },
  enter: {
    x: "0%",
    borderRadius: " 0% 100% 100% 0% / 50% 0% 0% 50%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    borderRadius: "90% 10% 10% 90% / 50% 0% 0% 50%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const linksAnimation = {
  initial: {
    x: "80px",
  },
  enter: (i) => ({
    x: "0px",
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
  }),
  exit: (i) => ({
    x: "80px",
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
  }),
};

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const handleHeaderOptionClick = (index) => {
    setIsSidebarOpen(false);
    const sectionId = sidebarOptions[index].id;
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.sidebar}
          >
            <div
              className={styles.burgerMenu}
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
              </svg>
            </div>
            <div className={styles.helper}>
              {sidebarOptions.map((sidebarOption, index) => {
                return (
                  <motion.div
                    custom={index}
                    variants={linksAnimation}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={index}
                    className={styles.sidebarOption}
                    onClick={() => handleHeaderOptionClick(index)}
                  >
                    {sidebarOption.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
