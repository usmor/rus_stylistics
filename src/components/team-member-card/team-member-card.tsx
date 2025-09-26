import React, { FC, memo } from "react";
import { TeamMemberCardUI } from "../ui/team-member-card/team-member-card";
import { TTeamMember } from "../../utils/types";
import clsx from "clsx";

interface ITeamMemberCardProps extends TTeamMember {}

export const TeamMemberCard: FC<ITeamMemberCardProps> = memo((props) => {
  const { role } = props;

  const colorForRole = {
    leader: "orange",
    author: "green",
    developer: "violet",
  };
  return <TeamMemberCardUI {...props} color={colorForRole[role]} />;
});
