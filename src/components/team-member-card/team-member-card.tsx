import React, { FC, memo } from "react";
import { TeamMemberCardUI } from "../ui/team-member-card/team-member-card";
import { TeamMember } from "../../utils/types";
import { TeamTypesColors } from "../../utils/constants";
import { useSelector } from "react-redux";
import { selectArticlesByAuthor } from "../../services/handbookSlice/slice";
import { RootState } from "../../services/store";

interface ITeamMemberCardProps extends TeamMember {}

export const TeamMemberCard: FC<ITeamMemberCardProps> = memo((props) => {
  const { role, id } = props;

  const articlesData = useSelector((state: RootState) =>
    selectArticlesByAuthor(state, id),
  );

  return (
    <TeamMemberCardUI
      {...props}
      articles={articlesData}
      color={TeamTypesColors[role]}
    />
  );
});
