import { DescriptionBlock, Subsection } from "../../utils/types";

export interface ISectionPage {
  title: string;
  description: DescriptionBlock[];
  articles?: Subsection[];
}
