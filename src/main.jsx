import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider as StateProviderRedux } from 'react-redux';
import { store } from './redux/store';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <StateProviderRedux store={store}>
    <App />
  </StateProviderRedux>
);

