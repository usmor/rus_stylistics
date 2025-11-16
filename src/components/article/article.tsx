import { FC } from "react";
import ArticleProps from "./type";
import { ArticleUI } from "../ui/article/article";

export const Article: FC<ArticleProps> = ({ content }) => {
  return <ArticleUI content={content} />;
};
