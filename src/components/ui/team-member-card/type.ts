export interface ITeamMemberCardUIProps {
  id: string;
  name: string;
  email?: string;
  photo?: string;
  articles?: { title: string; link: string }[];
  color: string;
  tasks?: string;
}
