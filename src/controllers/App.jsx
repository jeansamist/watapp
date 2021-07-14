import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Sidebar from './../components/Sidebar.jsx'

// Views
import DashboardView from "./../Views/DashboardView.jsx";
import ShoppingView from "./../Views/ShoppingView.jsx";
import ClientsView from "./../Views/ClientsView.jsx";

class App extends React.Component {
  render () {
    return <Router>
      <div className="master">
        <Sidebar k={0} />
        <Switch>
          <Route path="/" exact component={DashboardView} />
          <Route path="/shopping" component={ShoppingView} />
          <Route path="/clients" component={ClientsView} />
        </Switch>
      </div>
    </Router>
  }
}

export default App;
