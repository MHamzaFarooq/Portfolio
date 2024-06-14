import styles from "./style.module.css";
export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
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
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
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
              <div
                className={styles.sidebarOption}
                onClick={() => handleHeaderOptionClick(index)}
              >
                {sidebarOption.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
