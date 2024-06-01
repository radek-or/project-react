import { createStore } from 'redux';
import { createSelector } from 'reselect';
import initialState from './initialState';
import shortid from 'shortid';

// selectors
const getLists = state => state.lists;
const getColumns = state => state.columns;
const getCards = state => state.cards;
const getSearchString = state => state.searchString;
const getColumnId = (state, columnId) => columnId;
const getListId = (state, listId) => listId;

export const getListById = createSelector(
  [getLists, getListId],
  (lists, listId) => lists.find(list => list.id === listId)
);

export const getColumnsByList = createSelector(
  [getColumns, getListId],
  (columns, listId) => columns.filter(column => column.listId === listId)
);

export const getFilteredCards = createSelector(
  [getCards, getColumnId, getSearchString],
  (cards, columnId, searchString) => cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()))
);

export const getAllLists = createSelector(
  [getLists],
  (lists) => lists
);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { 
        ...state, 
        columns: [
          ...state.columns, 
          { 
            ...action.payload, 
            id: shortid(),
            listId: action.payload.listId
          }
        ]
      };
    case 'ADD_CARD':
      return { 
        ...state, 
        cards: [
          ...state.cards, 
          { 
            ...action.payload, 
            id: shortid() 
          }
        ]
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            ...action.payload,
            id: shortid()
          }
        ]
      };
    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
