import { FC } from "react";
import styles from "./article-card.module.css";
import { Link } from "react-router-dom";
import { TArticleCard } from "./type";

export const ArticleCardUI: FC<TArticleCard> = ({
  title,
  id,
  author,
  tags,
  color,
}) => {
  return (
    <Link to={id} className={styles.articleCardLink}>
      <div
        className={styles.articleCard}
        style={{ borderInlineEndColor: `var(--${color})` }}
      >
        <h4
          className={styles.articleTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={styles.articleAuthor}>автор статьи: {author}</p>
        <ul className={styles.articleTagsList}>
          {tags.map((tag, index) => (
            <li key={index}>
              <p className={styles.tag}>#{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
