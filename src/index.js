import React from 'react';
import ReactDOM from 'react-dom';
import ProtectedRoute from './controllers/ProtectedRoute.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './controllers/App.jsx';
import Login from './controllers/Login.jsx';
// import Login from './Login.jsx';

// styles
import './assets/styles/css/bootstrap-grid.css';
import './assets/styles/css/master.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" isLogin={true} component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
