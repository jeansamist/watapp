import React from 'react'
// Views
import Dashboard_view from './views/Dashboard_view.jsx'
import Stockmanager_view from './views/Stockmanager_view.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar.jsx";
// import UserPannel from "./components/UserPannel.jsx";

class App extends React.Component {
  state = {
    pageName: ""
  }
  componentDidUpdate () {
    document.title = this.state.pageName + " - Watapp";
  }
  render () {
    return <Router>
      <div className="master">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard_view />
          </Route>
          <Route exact path="/stockmanager">
            <Stockmanager_view />
          </Route>
        </Switch>
        {/* <UserPannel /> */}
      </div>
    </Router>
  }
}

export default App;