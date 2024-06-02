import shortid from 'shortid';
import { createSelector } from 'reselect';

// selectors
const getListsState = (state) => state.lists;

export const getListById = createSelector(
  [getListsState, (state, listId) => listId],
  (lists, listId) => lists.find(list => list.id === listId)
);

export const getAllLists = createSelector(
  [getListsState],
  (lists) => lists.slice() // Ensure a new reference is returned
);

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = payload => ({ type: ADD_LIST, payload });

// reducer
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default listsReducer;
