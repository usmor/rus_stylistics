import { FC } from "react";
import { TeamSectionUI } from "../ui/team-section/team-section";
import teamData from "../../data/team.json";
import { TTeamMember } from "../../utils/types";

interface TeamSectionProps {
  role: "developer" | "author" | "leader";
  title: string;
}

export const TeamSection: FC<TeamSectionProps> = ({ role, title }) => {
  const members: TTeamMember[] = teamData.team.map((member) => ({
    ...member,
    role: member.role as "developer" | "author" | "leader",
  }));

  const filteredMembers = members.filter((member) => member.role === role);

  return <TeamSectionUI title={title} members={filteredMembers} />;
};
