
import React from 'react';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMacth/NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        {/* exact important */}
        <Route exact path="/">
            <Home></Home>
        </Route>
        {/* dynamic path according to id */}
        <Route  path="/friend/:id">
           <FriendDetails/>
        </Route>
        {/* no path match */}
        <Route path="*">
            <NoMatch/>
        </Route>
        
      </Switch>
    
    </Router>
    
  );
};

export default App;