import styles from "./hero.module.css";
import React from "react";

type HeroProps = {
  headline: string;
};
export const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.headline}>{props.headline}</h1>
    </div>
  );
};
