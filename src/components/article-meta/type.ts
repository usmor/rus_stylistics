export interface ArticleMetaProps {
  article: {
    id: string;
    title: string;
    authorID: string;
    tags: string[];
    sectionID: string;
  };
}
