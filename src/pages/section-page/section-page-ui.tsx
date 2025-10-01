import { FC } from "react";
import styles from "./section-page.module.css";
import { ISectionPage } from "./type";
import { ArticleCard } from "../../components/article-card/article-card";

export const SectionPageUI: FC<ISectionPage> = ({
  title,
  description,
  articles,
}) => {
  return (
    <>
      <div className={styles.infoBlock}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && (
          <div className={styles.sectionDescription}>
            {description.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className={styles.descriptionParagraph}>
                    {block.text}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className={styles.descriptionList}>
                    {block.items.map((item, i) => (
                      <li key={i} className={styles.descriptionListItem}>
                        <p className={styles.descriptionParagraph}>{item}</p>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>

      <ul className={styles.articlesBlock}>
        {articles &&
          articles.map((subsection) => (
            <li key={subsection.subsection}>
              <section>
                <h3 className={styles.subsetionTitle}>
                  {subsection.subsection}
                </h3>
                <ul className={styles.articlesList}>
                  {subsection.articles.map((article) => (
                    <li>
                      <ArticleCard {...article} />
                    </li>
                  ))}
                </ul>
              </section>
            </li>
          ))}
      </ul>
    </>
  );
};
