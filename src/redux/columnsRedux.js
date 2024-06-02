import shortid from 'shortid';
import { createSelector } from 'reselect';

// selectors
const getColumnsState = (state) => state.columns;
const getListId = (state, listId) => listId;

export const getColumnsByList = createSelector(
  [getColumnsState, getListId],
  (columns, listId) => columns.filter(column => column.listId === listId).slice() // Ensure a new reference is returned
);

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

// reducer
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
