import { createSlice } from "@reduxjs/toolkit";
import { TeamData, TeamMember } from "../../utils/types";
import teamJson from "../../data/team.json";

interface TeamState {
  team: TeamData;
}

const initialState: TeamState = {
  team: teamJson as TeamData,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export const selectAllMembers = (state: { team: TeamState }): TeamMember[] =>
  state.team.team.team;

export const selectAuthorById = (
  state: { team: TeamState },
  authorId: string,
): TeamMember | undefined =>
  state.team.team.team.find((m) => m.id === authorId);

export const selectTeamByRole =
  (role: TeamMember["role"]) =>
  (state: { team: TeamState }): TeamMember[] =>
    state.team.team.team.filter((member) => member.role === role);

export default teamSlice.reducer;
