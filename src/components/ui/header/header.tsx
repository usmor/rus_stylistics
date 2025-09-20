import React, { FC } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface HeaderUIProps {
  onMenuClick: () => void;
}

export const HeaderUI: FC<HeaderUIProps> = ({ onMenuClick }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/search" className={styles.navLink} aria-label="Поиск">
          <svg
            className={clsx(styles.icon, styles.searchIcon)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 55 55"
          >
            <path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"></path>
          </svg>
        </NavLink>
        <h1 className={styles.title}>стилистика русского языка</h1>
        <button
          className={styles.navLink}
          onClick={onMenuClick}
          aria-label="Меню"
        >
          <svg
            className={clsx(styles.icon, styles.menuIcon)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 55 55"
          >
            <path d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};
