import { FC, ReactNode } from "react";
import styles from "./text-block.module.css";

interface TextBlockProps {
  title: string;
  id: string;
  children: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = ({ title, id, children }) => (
  <section className={styles.textBlock}>
    <h3 className={styles.textBlockTitle} id={id}>
      {title}
    </h3>
    <div className={styles.content}>{children}</div>
  </section>
);
