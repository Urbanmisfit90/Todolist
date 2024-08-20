import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleModal } from './actions';

const Modal = React.lazy(() => import('./Modal'));

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const isModalOpen = useSelector(state => state.isModalOpen);

  const handleThemeChange = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const handleToggleModal = () => {
    dispatch(toggleModal(!isModalOpen));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleThemeChange}>
        Toggle Theme
      </button>
      <button onClick={handleToggleModal}>
        Toggle Modal
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && <Modal />}
      </Suspense>
    </div>
  );
}

export default App;