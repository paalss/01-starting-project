import React from "react";
import styles from "./Button.module.css"; // 'from styles' for å bruke css modules

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
