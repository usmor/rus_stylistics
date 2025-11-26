import { FC, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import NotFound404 from "../not-found-404/not-found-404";
import { ArticlePageUI } from "./article-page-ui";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectArticleById } from "../../services/handbookSlice/slice";

const ArticlePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const articleData = useSelector((state: RootState) =>
    id ? selectArticleById(state, id) : null,
  );

  if (!id || !articleData) {
    return <NotFound404 />;
  }

  const ArticleContent = lazy(() =>
    import(`../../articles/${articleData.markUp.replace(".tsx", "")}`).catch(
      () => ({
        default: () => <NotFound404 />,
      }),
    ),
  );

  return (
    <Suspense fallback={<div>Загрузка статьи...</div>}>
      <ArticlePageUI article={articleData} content={<ArticleContent />} />
    </Suspense>
  );
};

export default ArticlePage;
