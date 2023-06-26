import { Link, NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink to="/">Add Info</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="/preview">Preview</NavLink>
        </li>
      </ul>
    </nav>
  );
};
