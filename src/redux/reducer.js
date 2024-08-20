import { SET_THEME, TOGGLE_MODAL } from './actions';

const initialState = {
  theme: 'light',
  isModalOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};