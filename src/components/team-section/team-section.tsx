import { FC } from "react";
import { TeamSectionUI } from "../ui/team-section/team-section";
import { useSelector } from "react-redux";
import { selectTeamByRole } from "../../services/teamSlice/slice";

interface TeamSectionProps {
  role: "developer" | "author" | "leader";
  title: string;
}

export const TeamSection: FC<TeamSectionProps> = ({ role, title }) => {
  const filteredMembers = useSelector(selectTeamByRole(role));

  return <TeamSectionUI title={title} members={filteredMembers} />;
};
