import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { selectAuthorById } from "../../services/teamSlice/slice";
import { SectionsColors } from "../../utils/constants";
import { ArticleCardUI } from "../ui/article-card/article-card";
import { RootState } from "../../services/store";
import { ArticleCardProps } from "./type";

export const ArticleCard: FC<ArticleCardProps> = memo(
  ({ id, title, tags, authorID, sectionID }) => {
    const author =
      useSelector((state: RootState) => selectAuthorById(state, authorID))
        ?.name || "";

    const color =
      SectionsColors[sectionID as keyof typeof SectionsColors] || "grey";

    return (
      <ArticleCardUI
        id={id}
        title={title}
        author={author}
        tags={tags}
        color={color}
      />
    );
  },
);
