import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      setError('Todo cannot be empty');
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TodoInput;
