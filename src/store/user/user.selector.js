import { createSelector } from "reselect";

const rootObj = (state) => state.user;

// const momoizedcurrentUserState = createSelector([rootObj],(userObj) => userObj.currentUser);

export const currentUserState = createSelector([rootObj], (user) => user.currentUser);

export const isLoading = createSelector([rootObj], (userObj) => userObj.loading);

