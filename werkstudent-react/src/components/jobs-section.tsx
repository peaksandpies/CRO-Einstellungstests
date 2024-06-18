"use client";
import styles from "./jobs-section.module.css";
import React from "react";
import { TextInput } from "./text-input";

export const JobsSection: React.FC = (props) => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.headline}>Welcher unserer Jobs passt zu dir?</h2>

      <form className={styles.form}>
        <TextInput
          id="user"
          inputType="text"
          name="user"
          placeholder="Github User"
          title="Der Username des Bewerbers"
          value=""
          onChange={() => console.log("Wieso funktioniert das noch nicht?")}
        />
      </form>

      <p className={styles.team}>{"Conversion Optimization"}</p>
      <h3 className={styles.title}>{"(Senior) Sales Manager (w/m/d)"}</h3>
    </div>
  );
};
