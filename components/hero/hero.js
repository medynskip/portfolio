import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroWrap}>
      <div className={styles.hero}>
        <h2>
          Piotr
          <br />
          Medyński
        </h2>
        <h4>Freelance Frontend Developer</h4>
        <hr />
        <p>
          Proident aliquip esse ipsum ea nulla anim velit in veniam. Amet
          adipisicing et reprehenderit et adipisicing excepteur sint ullamco in.
          Pariatur adipisicing non proident enim.
        </p>
      </div>
    </div>
  );
};

export default Hero;
