import { FC, ReactNode } from "react";
import styles from "./references.module.css";

interface ReferencesProps {
  items: ReactNode[];
}

export const References: FC<ReferencesProps> = ({ items }) => {
  return (
    <details className={styles.references}>
      <summary className={styles.referencesSummary}>
        <svg
          className={styles.referencesSummaryIcon}
          viewBox="0 0 34 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 19L1.41688e-06 2.79276L2.92937 1.09842e-06L17 13.4145L31.0706 3.5586e-06L34 2.79276L17 19Z"
            fill="currentColor"
          />
        </svg>
        <h3 className={styles.referencesSummaryTitle} id="references">
          Список литературы
        </h3>
      </summary>
      <ul className={styles.referencesList}>
        {items.map((item) => (
          <li className={styles.referencesListItem}>{item}</li>
        ))}
      </ul>
    </details>
  );
};
