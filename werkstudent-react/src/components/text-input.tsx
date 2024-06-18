"use client";

import styles from "./text-input.module.css";
import React, { useState } from "react";
import c from "clsx";

type TextInputProps = {
  inputType: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  placeholder: string;
  title: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput: React.FC<TextInputProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsActive(false);
    if (e.target.value.length > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const updateCurrentValue = (e: React.FormEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  };

  return (
    <div
      className={c(styles.input, {
        [styles.active]: isActive || isFilled,
      })}
    >
      <label className={styles.label} htmlFor={props.name}>
        {props.placeholder}
      </label>
      <input
        className={styles.field}
        id={props.id}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={updateCurrentValue}
        onInvalid={handleBlur}
        title={props.title}
        required
      />
    </div>
  );
};
