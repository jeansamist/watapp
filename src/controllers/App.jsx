import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

// Components
import Sidebar from './../components/Sidebar.jsx'

// Views
import DashboardView from "./../Views/DashboardView.jsx";
import ShoppingView from "./../Views/ShoppingView.jsx";
import StructureView from "./../Views/StructureView.jsx";
import ClientsView from "./../Views/ClientsView.jsx";
import PageNotFound from '../Views/404.jsx';
import StockView from '../Views/StockView.jsx';
import OptionsView from '../Views/OptionsView.jsx';

class App extends React.Component {
  render () {
    // (this.props);
    return <Router>
      <div className="master">
        <Sidebar k={0} structure={this.props.match.params.structure} />
        <Switch>
          <Route path="/" exact render={() => {
            return <Redirect to={"/structures"} />
          }} />
          <Route path="/watapp/dashboard/:structure" component={DashboardView} />
          <Route path="/watapp/stock/:structure" component={StockView} />
          <Route path="/watapp/shopping/:structure" component={ShoppingView} />
          <Route path="/watapp/structures/:structure" component={StructureView} />
          <Route path="/watapp/clients/:structure" component={ClientsView} />
          <Route path="/watapp/options/:structure" component={OptionsView} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  }
}

export default App;
