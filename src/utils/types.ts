export type TSection = {
  section: string;
  id: string;
  subsections: any[];
  shortDescription: string;
};

export interface Sections {
  sections: TSection[];
}
