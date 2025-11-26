import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./article-meta.module.css";
import { FC } from "react";

interface ArticleMetaUIProps {
  article: {
    id: string;
    title: string;
    authorID: string;
    tags: string[];
    sectionID: string;
    author: string;
  };
  onTagClick?: () => void;
}

export const ArticleMetaUI: FC<ArticleMetaUIProps> = ({
  article,
  onTagClick,
}) => {
  return (
    <div className={styles.meta}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: article.title }}
      />

      <ul className={styles.tags}>
        {article.tags.map((tag) => (
          <li key={tag} className={styles.tag} onClick={onTagClick}>
            <NavLink to="">{`#${tag}`}</NavLink>
          </li>
        ))}
      </ul>

      <span className={styles.author}>
        Автор статьи:{" "}
        <HashLink
          smooth
          to={`/team#${article.authorID}`}
          className={styles.authorLink}
        >
          {article.author}
        </HashLink>
      </span>
    </div>
  );
};
