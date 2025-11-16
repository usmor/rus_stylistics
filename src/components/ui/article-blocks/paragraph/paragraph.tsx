import { FC } from "react";
import styles from "./paragraph.module.css";

export const Paragraph: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
);
