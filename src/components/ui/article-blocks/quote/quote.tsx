import { FC, ReactNode } from "react";
import styles from "./quote.module.css";

interface QuoteProps {
  number?: string;
  source?: string | ReactNode;
  text: ReactNode;
}

export const Quote: FC<QuoteProps> = ({ number, text, source }) => {
  return (
    <blockquote className={styles.quoteBlock}>
      <div className={styles.quoteContent}>
        {number && <span className={styles.quoteNumber}>({number})</span>}
        <div className={styles.quoteText}>{text}</div>
      </div>
      {source && <p className={styles.quoteSource}>[{source}]</p>}
    </blockquote>
  );
};
