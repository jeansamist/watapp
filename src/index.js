import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// styles
import './assets/styles/css/bootstrap-grid.css';
import './assets/styles/css/master.css';

// Components
import Protection from './controllers/Protection.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Protection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// ))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
