import styles from "./contact.module.scss";

import Section from "./../section";

const Contact = () => {
  return (
    <Section id="contact">
      <div className={styles.contact}>
        <p>
          Zapraszam do kontaktu mailowego: <br />
          medynski@outlook.com
        </p>
        <p>
          Moje profile:
          <br />
          LinkedIn: https://www.linkedin.com/in/piotr-medynski-69b97381/
          <br />
          GitHub: https://github.com/medynskip
          <br />
        </p>
      </div>
    </Section>
  );
};

export default Contact;
