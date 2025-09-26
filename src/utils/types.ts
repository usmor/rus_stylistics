export type TSection = {
  section: string;
  id: string;
  subsections: any[];
  shortDescription: string;
};

export interface Sections {
  sections: TSection[];
}

export type TTeamMember = {
  id: string;
  name: string;
  email?: string;
  role: "leader" | "author" | "developer";
  photo?: string;
  articles?: {
    title: string;
    link: string;
  }[];
  tasks?: string;
};
