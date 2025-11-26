import React, { FC, memo, useEffect, useState } from "react";
import styles from "./menu.module.css";
import { TMenuUIProps } from "./type";
import { ModalOverlayUI } from "../modal-overlay/modal-overlay";
import clsx from "clsx";
import { selectSections } from "../../../services/handbookSlice/slice";
import { useLocation } from "react-router-dom";
import FocusLock from "react-focus-lock";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../services/store";

export const MenuUI: FC<TMenuUIProps> = memo(({ onClose }) => {
  const location = useLocation();
  const sections = useSelector((state: RootState) => selectSections(state));
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);

  useEffect(() => {
    const isOnSection = sections.some(
      (section) => location.pathname === `/sections/${section.id}`,
    );
    setIsSectionsOpen(isOnSection);
  }, [location.pathname, sections]);

  return (
    <FocusLock>
      <div className={styles.menu}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            className={styles.icon}
            viewBox="0 0 45 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M45 3.2226L25.7226 22.5L45 41.7774L41.7774 45L22.5 25.7226L3.2226 45L0 41.7774L19.2774 22.5L0 3.2226L3.2226 0L22.5 19.2774L41.7774 0L45 3.2226Z" />
          </svg>
        </button>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.isActive : ""}`
                }
              >
                Главная страница
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <details open={isSectionsOpen}>
                <summary className={styles.menuSummary}>Разделы</summary>
                <ul className={clsx(styles.menuList, styles.subMenuList)}>
                  {sections.map((section) => (
                    <li key={section.id} className={styles.menuItem}>
                      <NavLink
                        className={({ isActive }) =>
                          `${styles.menuLink} ${isActive ? styles.isActive : ""}`
                        }
                        to={`/sections/${section.id}`}
                        onClick={onClose}
                      >
                        {section.section}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/team"
                onClick={onClose}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.isActive : ""}`
                }
              >
                Команда
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/all-articles"
                onClick={onClose}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.isActive : ""}`
                }
              >
                Полный список статей
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <HashLink
                smooth
                to="/#faq"
                onClick={onClose}
                className={styles.menuLink}
              >
                Вопросы и ответы
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </FocusLock>
  );
});
