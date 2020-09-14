import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';
import Index from './views';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Index {...props} />} />
        <Route exact path="/index" render={(props) => <Index {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
