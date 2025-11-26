import { FC } from "react";
import { Article } from "../../components/article/article";
import { TableOfContents } from "../../components/table-of-contents/table-of-contents";
import styles from "./article-page.module.css";
import { ArticleMeta } from "../../components/article-meta/article-meta";
import SEO from "../../components/seo/seo";

interface ArticlePageUIProps {
  article: {
    id: string;
    title: string;
    authorID: string;
    tags: string[];
    sectionID: string;
  };
  content: React.ReactNode;
}

const ArticlePageUI: FC<ArticlePageUIProps> = ({ article, content }) => {
  return (
    <>
      <SEO
        title={article.title}
        description={`Изучайте тему: ${article.title}. ${article.tags.join(", ")}`}
        keywords={article.tags.join(", ")}
        type="article"
        name={article.title}
      />
      <div className={styles.articleLayout}>
        <ArticleMeta article={article} />
        <Article content={content} />
        <TableOfContents />
      </div>
    </>
  );
};

export { ArticlePageUI };
