import React, { FC, memo, useEffect, useState } from "react";
import styles from "./menu.module.css";
import { TMenuUIProps } from "./type";
import { ModalOverlayUI } from "../modal-overlay/modal-overlay";
import { MenuItemUI } from "../menu/menu-item/menu-item";
import clsx from "clsx";
import sectionsData from "../../../data/sections.json";
import { Sections } from "../../../utils/types";
import { useLocation } from "react-router-dom";
import FocusLock from "react-focus-lock";

export const MenuUI: FC<TMenuUIProps> = memo(({ onClose }) => {
  const location = useLocation();
  const { sections } = sectionsData as Sections;
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
              <MenuItemUI label="Главная страница" path="/" onClick={onClose} />
            </li>
            <li className={styles.menuItem}>
              <details open={isSectionsOpen}>
                <summary className={styles.menuSummary}>Разделы</summary>
                <ul className={clsx(styles.menuList, styles.subMenuList)}>
                  {sections.map((section) => (
                    <li key={section.id} className={styles.menuItem}>
                      <MenuItemUI
                        label={section.section}
                        path={`/sections/${section.id}`}
                        onClick={onClose}
                      />
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className={styles.menuItem}>
              <MenuItemUI label="Команда" path="/team" onClick={onClose} />
            </li>
            <li className={styles.menuItem}>
              <MenuItemUI
                label="Полный список статей"
                path="/all-articles"
                onClick={onClose}
              />
            </li>
            <li className={styles.menuItem}>
              <MenuItemUI
                label="Вопросы и ответы"
                path="/#faq"
                onClick={onClose}
              />
            </li>
          </ul>
        </nav>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </FocusLock>
  );
});
