import { FC } from "react";
import styles from "./article.module.css";
import { ArticleUIProps } from "./type";

export const ArticleUI: FC<ArticleUIProps> = ({ content }) => {
  return <article className={styles.content}>{content}</article>;
};
