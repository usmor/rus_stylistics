import { FC } from "react";
import styles from "./link.module.css";

interface LinkProps {
  href: string;
  text: string;
}

export const Link: FC<LinkProps> = ({ href, text }) => (
  <a href={href} target="_blank" className={styles.link}>
    {text}
  </a>
);
