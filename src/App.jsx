// Components

// Views
import Home_view from './views/Home_view.jsx'
import Stockmanager_view from './views/Stockmanager_view.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <Router>
      <div className="master">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home_view />
          </Route>
          <Route exact path="/stockmanager">
            <Stockmanager_view />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
