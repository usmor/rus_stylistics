import { createSelector, createSlice } from "@reduxjs/toolkit";
import { HandbookData, Article, Section } from "../../utils/types";
import handbookJson from "../../data/handbook.json";

interface HandbookState {
  handbook: HandbookData;
}

const initialState: HandbookState = {
  handbook: handbookJson,
};

export const handbookSlice = createSlice({
  name: "handbook",
  initialState,
  reducers: {},
});

export const selectSections = (state: { handbook: HandbookState }): Section[] =>
  state.handbook.handbook.sections;

export const selectAllArticles = (state: {
  handbook: HandbookState;
}): Article[] =>
  state.handbook.handbook.sections.flatMap((section) =>
    section.subsections.flatMap((sub) => sub.articles),
  );

export const selectArticleById = (
  state: { handbook: HandbookState },
  articleId: string,
) => selectAllArticles(state).find((a) => a.id === articleId);

export const selectArticlesByAuthor = (
  state: { handbook: HandbookState },
  authorId: string,
): Article[] => selectAllArticles(state).filter((a) => a.authorID === authorId);

export const selectSectionByArticleId = createSelector(
  [selectArticleById, (state: HandbookState) => state.handbook.sections],
  (article, sections) => {
    if (!article) return undefined;
    return sections.find((section) => section.id === article.sectionID);
  },
);
export default handbookSlice.reducer;
