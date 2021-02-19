import styles from "./section.module.scss";

const Section = ({ children, id }) => {
  return (
    <div id={id} className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
