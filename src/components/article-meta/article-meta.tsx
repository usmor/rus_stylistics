import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { selectAuthorById } from "../../services/teamSlice/slice";
import { ArticleMetaUI } from "../ui/article-meta/article-meta";
import { ArticleMetaProps } from "./type";

export const ArticleMeta: FC<ArticleMetaProps> = ({ article }) => {
  const author =
    useSelector((state: RootState) => selectAuthorById(state, article.authorID))
      ?.name || "";

  return <ArticleMetaUI article={{ ...article, author: author }} />;
};
