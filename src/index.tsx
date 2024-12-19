import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import { makeServer } from './api';

import ApplicationContext from './context';
import data from './api/data.json';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { fetchTasks } from './features/tasks-slice';

const environment = process.env.NODE_ENV;
makeServer({ environment });

// to dispatch this action at the beginning of setup the app
// so we go that early
store.dispatch(fetchTasks());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApplicationContext.Provider value={data}>
      <Provider store={store}>
        <Application />
      </Provider>
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
