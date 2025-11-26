export interface HandbookData {
  sections: Section[];
}

export interface Section {
  section: string;
  shortDescription: string;
  description: DescriptionBlock[];
  id: string;
  subsections: Subsection[];
}

export type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface Subsection {
  subsection: string;
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  authorID: string;
  tags: string[];
  markUp: string;
  sectionID: string;
}

export interface TeamData {
  team: TeamMember[];
}

export interface TeamMember {
  id: string;
  name: string;
  email?: string;
  role: "leader" | "author" | "developer";
  photo?: string;
  articles?: string[];
  tasks?: string;
}
