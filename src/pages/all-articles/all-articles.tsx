import { FC, useEffect, useState } from "react";
import SEO from "../../components/seo/seo";
import styles from "./all-articles.module.css";
import { ArticleCard } from "../../components/ui/article-card/article-card";
import { SectionsColors } from "../../utils/constants";
import { selectAllArticles } from "../../services/handbookSlice/slice";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectAllMembers } from "../../services/teamSlice/slice";
import { stripTags } from "../../utils/helpers";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

const ARTICLES_PER_PAGE = 10;

const AllArticlesPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromURL = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  const articles = useSelector((state: RootState) => selectAllArticles(state));
  const allMembers = useSelector((state: RootState) => selectAllMembers(state));

  useEffect(() => {
    setCurrentPage(pageFromURL);
  }, [pageFromURL]);

  const goToPage = (page: number) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setSearchParams({ page: page.toString() });
  };

  const updatedArticles = articles.map((article) => {
    const author = allMembers.find((member) => member.id === article.authorID);
    return {
      ...article,
      author: author?.name || "",
      color:
        SectionsColors[article.sectionID as keyof typeof SectionsColors] ||
        "grey",
      cleanedTitle: stripTags(article.title),
    };
  });

  const sortedArticles = [...updatedArticles].sort((a, b) =>
    a.cleanedTitle.localeCompare(b.cleanedTitle),
  );

  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  const groupedArticles = paginatedArticles.reduce<
    Record<string, typeof paginatedArticles>
  >((acc, article) => {
    const firstLetter = article.cleanedTitle[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(article);
    return acc;
  }, {});

  return (
    <>
      <SEO
        title="Полный список статей справочника по практической стилистики русского языка"
        description="Проект «Стилистика русского языка» создан для того, чтобы сделать знания по грамматике и семантике более доступными для всех, кто работает с речью — будь то студенты, журналисты, редакторы или преподаватели. Главная задача проекта — ответить на вопрос «Какой вариант конструкции является нормативным и более удачным с коммуникативной точки зрения?» В справочнике вы найдете информацию о сложных случаях употребления разных языковых единиц. Материал представлен в доступной форме и не требует специальных лингвистических знаний. А каждая статья будет сопровождаться наглядными примерами, что поможет лучше понять критерии выбора тех или иных языковых конструкций. Особое внимание уделяется новым и актуальным проблемам грамматики и семантики русского языка, которые не освещены в традиционных учебниках, но важны для носителей языка."
        keywords="русский язык, стилистика, справочник, лексика, грамматические формы, синтаксис"
        type="website"
        name={"Справочник по практической стилистики русского языка"}
      />
      <section className={styles.infoBlock}>
        <h2 className={styles.pageTitle}>Полный список статей</h2>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            В данном разделе вы найдете все статьи справочника.
          </p>
          <p className={styles.text}>
            Для удобного пользования статьи отсортированы в алфавитном порядке
            по названию.
          </p>
        </div>
      </section>

      {Object.entries(groupedArticles).map(([letter, articles]) => (
        <section key={letter} className={styles.letterSection}>
          <h3 className={styles.letterTitle}>{letter}</h3>
          <ul className={styles.articlesList}>
            {articles.map((article, index) => (
              <li key={index} className={styles.articlesListItem}>
                <ArticleCard {...article}></ArticleCard>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 41 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5299e-06 17.5L18.1964 -1.99355e-06L20.8026 2.50646L7.05541 15.7276L41 15.7276L41 19.2724L7.05541 19.2724L20.8026 32.4935L18.1964 35L1.5299e-06 17.5Z" />
              </svg>
            </button>
          )}

          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                disabled={page === currentPage}
                className={clsx(
                  styles.paginationButton,
                  styles.pageNumber,
                  page === currentPage ? styles.activePage : "",
                )}
              >
                {page}
              </button>
            ))}
          </div>
          {currentPage < totalPages && (
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 41 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41 17.5L22.8036 35L20.1974 32.4935L33.9446 19.2724H0V15.7276H33.9446L20.1974 2.50646L22.8036 0L41 17.5Z" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default AllArticlesPage;
