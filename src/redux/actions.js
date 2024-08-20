export const SET_THEME = 'SET_THEME';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const toggleModal = (isOpen) => ({
  type: TOGGLE_MODAL,
  payload: isOpen,
});