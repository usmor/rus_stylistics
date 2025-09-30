import { Article } from "../../../utils/types";

export interface ITeamMemberCardUIProps {
  id: string;
  name: string;
  email?: string;
  photo?: string;
  articles?: Article[];
  color: string;
  tasks?: string;
}
