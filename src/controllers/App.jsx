import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render () {
    return <Router>
      <div className="master">
        Seter Page
      </div>
    </Router>
  }
}

export default App;
