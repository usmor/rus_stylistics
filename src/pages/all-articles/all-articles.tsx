import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../services/store";
import { selectAllArticles } from "../../services/handbookSlice/slice";
import { stripTags } from "../../utils/helpers";
import { AllArticlesPageUI } from "./all-articles-ui";

const ARTICLES_PER_PAGE = 10;

const AllArticlesPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromURL = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(pageFromURL);

  const articles = useSelector((state: RootState) => selectAllArticles(state));

  useEffect(() => {
    setCurrentPage(pageFromURL);
  }, [pageFromURL]);

  const goToPage = (page: number) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setSearchParams({ page: page.toString() });
  };

  const sortedArticles = [...articles].sort((a, b) =>
    stripTags(a.title).localeCompare(stripTags(b.title)),
  );

  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  const groupedArticles = paginatedArticles.reduce<
    Record<string, typeof paginatedArticles>
  >((acc, article) => {
    const firstLetter = stripTags(article.title)[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(article);
    return acc;
  }, {});

  return (
    <AllArticlesPageUI
      totalPages={totalPages}
      groupedArticles={groupedArticles}
      currentPage={currentPage}
      goToPage={goToPage}
    />
  );
};

export default AllArticlesPage;
