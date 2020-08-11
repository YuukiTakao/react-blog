import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './pages/form.js'
import BaseLayout from './components/layout.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout>
      <Form />
    </BaseLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
