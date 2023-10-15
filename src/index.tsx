import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {MainData} from './data/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      main={MainData}
    />
  </React.StrictMode>
);
