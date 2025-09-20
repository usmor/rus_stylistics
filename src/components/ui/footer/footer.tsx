import React, { FC } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { TFooterProps } from "./type";

export const FooterUI: FC<TFooterProps> = ({ copyright }) => (
  <footer className={clsx(styles.footer)}>
    <div className={styles.footerQuestions}>
      <h4 className={styles.footerQuestionsTitle}>Часто задаваемые вопросы</h4>
      <ul className={styles.footerQuestionsList}>
        <li className={styles.footerQuestionsListItem}>
          <NavLink to="/#about" className={styles.footerLink}>
            О проекте
          </NavLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <NavLink to="/#who" className={styles.footerLink}>
            Кто разрабатывает Справочник?
          </NavLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <NavLink to="/#quote" className={styles.footerLink}>
            Как ссылаться на материалы проекта?
          </NavLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <NavLink to="/#address" className={styles.footerLink}>
            Как связаться с редакцией?
          </NavLink>
        </li>
      </ul>
    </div>

    <nav className={styles.footerInfo}>
      <ul className={styles.footerInfoLinks}>
        <li className={styles.footerInfoLinksItem}>
          <NavLink to="/" className={styles.footerLink}>
            Главная
          </NavLink>
        </li>
        <li className={styles.footerInfoLinksItem}>
          <NavLink to="/#sections" className={styles.footerLink}>
            Разделы
          </NavLink>
        </li>
        <li className={styles.footerInfoLinksItem}>
          <NavLink to="/team" className={styles.footerLink}>
            Команда
          </NavLink>
        </li>
      </ul>

      <p className={styles.footerCopyright}>
        &copy; НИУ ВШЭ Школа Лингвистики {copyright}{" "}
      </p>
    </nav>
  </footer>
);
