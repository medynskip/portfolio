import styles from "./navbar.module.scss";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < window.innerHeight - 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <div className={scroll ? styles.sticky : styles.scrolled}>
      <nav>
        <ul>
          <li>
            <a href="#aboutme">Stack</a>
          </li>
          <li>
            <a href="#projects">Projekty</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        {/* <ul>
          <li>
            <a href="#a">Git</a>
          </li>
          <li>
            <a href="#b">LinkedIn</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
