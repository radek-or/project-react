import shortid from 'shortid';
import { createSelector } from 'reselect';

// selectors
const getCardsState = (state) => state.cards;
const getSearchString = (state) => state.searchString;
const getColumnId = (state, columnId) => columnId;

export const getFilteredCards = createSelector(
  [getCardsState, getSearchString, getColumnId],
  (cards, searchString, columnId) => cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase())).slice() // Ensure a new reference is returned
);

export const getFavoriteCards = createSelector(
  [getCardsState],
  (cards) => cards.filter(card => card.isFavorite).slice() // Ensure a new reference is returned
);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });

// reducer
const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
