import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTodo } from '../redux/actions';

const CHANGE_LABEL = 'CHANGE_LABEL';
const CHANGE_IS_COMPLETED = 'CHANGE_IS_COMPLETED';

const initialState = {
  todoLabel: '',
  todoIsCompleted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LABEL:
      return { ...state, todoLabel: action.payload };
    case CHANGE_IS_COMPLETED:
      return { ...state, todoIsCompleted: action.payload };
    default:
      return state;
  }
};

export default function TodoInput() {
  const dispatch = useDispatch();
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  const onLabelChange = ({ target: { value } }) => {
    dispatchLocal({ type: CHANGE_LABEL, payload: value });
  };

  const onIsCompletedChange = ({ target: { checked } }) => {
    dispatchLocal({ type: CHANGE_IS_COMPLETED, payload: checked });
  };

  const resetForm = () => {
    dispatchLocal({ type: CHANGE_LABEL, payload: '' });
    dispatchLocal({ type: CHANGE_IS_COMPLETED, payload: false });
  };

  const onNewTodo = evt => {
    evt.preventDefault();
    dispatch(createNewTodo(state.todoLabel, state.todoIsCompleted));
    resetForm();
  };

  return (
    <form id="todoForm" onSubmit={onNewTodo}>
      <h2>Todo List</h2>
      <h3>Create New Todo Entry</h3>
      <label>
        <span>Todo label:</span>
        <input
          type="text"
          name="todoLabel"
          placeholder="Type label"
          onChange={onLabelChange}
          value={state.todoLabel}
        />
      </label>
      <label>
        <span>Is completed:</span>
        <input
          type="checkbox"
          name="todoIsCompleted"
          onChange={onIsCompletedChange}
          checked={state.todoIsCompleted}
        />
      </label>
      <label>
        <span>Create todo:</span>
        <input type="submit" value="Do it!" disabled={!state.todoLabel.trim()} />
      </label>
    </form>
  );
}
