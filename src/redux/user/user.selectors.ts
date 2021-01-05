import { createSelector } from "reselect";

import { UserState, MasterState } from "../../types/states";

const selectUser = (state: MasterState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser
);
