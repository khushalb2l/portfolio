import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Khushal</h1>
        <p className={styles.description}>
          Welcome to my portfolio!<br/>
          <br/>
          I am a MERN stack developer. Equipped with a
          strong foundation in Data Structures and Algorithms, as well as a
          profound understanding of computer science fundamentals. 
        </p>
        <a
          href="Khushal_Resume_Updated.pdf" download="Khushal_Resume_Updated.pdf"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="khushal_image"
        className={styles.heroImg}
      />
      
    </section>
  );
};

export default Hero;
