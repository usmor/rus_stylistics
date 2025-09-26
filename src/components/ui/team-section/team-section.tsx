import React, { FC } from "react";
import styles from "./team-section.module.css";
import { ITeamSection } from "./type";
import { TeamMemberCard } from "../../team-member-card/team-member-card";

export const TeamSectionUI: FC<ITeamSection> = ({ title, members }) => {
  return (
    <section className={styles.membersSection}>
      <h3 className={styles.membersType}>{title}</h3>
      <ul className={styles.membersList}>
        {members.map((member) => (
          <li key={member.id}>
            <TeamMemberCard {...member}></TeamMemberCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
