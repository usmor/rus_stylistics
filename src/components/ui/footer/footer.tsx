import React, { FC } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import { TFooterProps } from "./type";
import { HashLink } from "react-router-hash-link";

export const FooterUI: FC<TFooterProps> = ({ copyright }) => (
  <footer className={clsx(styles.footer)}>
    <div className={styles.footerQuestions}>
      <h4 className={styles.footerQuestionsTitle}>Часто задаваемые вопросы</h4>
      <ul className={styles.footerQuestionsList}>
        <li className={styles.footerQuestionsListItem}>
          <HashLink smooth to="/#about" className={styles.footerLink}>
            О проекте
          </HashLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <HashLink smooth to="/#who" className={styles.footerLink}>
            Кто разрабатывает Справочник?
          </HashLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <HashLink smooth to="/#quote" className={styles.footerLink}>
            Как ссылаться на материалы проекта?
          </HashLink>
        </li>
        <li className={styles.footerQuestionsListItem}>
          <HashLink smooth to="/#address" className={styles.footerLink}>
            Как связаться с редакцией?
          </HashLink>
        </li>
      </ul>
    </div>

    <nav className={styles.footerInfo}>
      <ul className={styles.footerInfoLinks}>
        <li className={styles.footerInfoLinksItem}>
          <HashLink smooth to="/" className={styles.footerLink}>
            Главная
          </HashLink>
        </li>
        <li className={styles.footerInfoLinksItem}>
          <HashLink smooth to="/#sections" className={styles.footerLink}>
            Разделы
          </HashLink>
        </li>
        <li className={styles.footerInfoLinksItem}>
          <HashLink smooth to="/team" className={styles.footerLink}>
            Команда
          </HashLink>
        </li>
      </ul>

      <p className={styles.footerCopyright}>
        &copy; НИУ ВШЭ Школа Лингвистики {copyright}{" "}
      </p>
    </nav>
  </footer>
);
