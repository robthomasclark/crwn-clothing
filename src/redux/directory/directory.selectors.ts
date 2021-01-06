import { createSelector } from "reselect";
import { MasterState } from "../../types/states";

const selectDirectory = (state: MasterState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
