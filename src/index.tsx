import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { App } from './components/app';
import { createAppStore } from './store/appStore';

import './styles.scss';

const appStore = createAppStore();

const Root = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
