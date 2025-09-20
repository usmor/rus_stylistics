import { TMenuItem } from "./type";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu-item.module.css";

export const MenuItemUI: FC<TMenuItem> = ({ label, path, onClick }) => {
  const isAnchorLink = path.includes("#");

  if (isAnchorLink) {
    const [basePath, anchor] = path.split("#");

    return (
      <a href={path} onClick={onClick} className={styles.menuLink}>
        {label}
      </a>
    );
  }
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `${styles.menuLink} ${isActive ? styles.isActive : ""}`
      }
      end={path === "/"}
    >
      {label}
    </NavLink>
  );
};
