import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';
import IndexNavbar from './components/Navbar/IndexNavbar';
import { listingsURL, loggedIn, parseJSON } from './helpers/requestHelper';
import Index from './views';
import ListingPage from './views/pages/listing';
import Sell from './views/pages/sell';
import ShopPage from './views/pages/shop';


function App() {
  const [listings, setListings] = useState([])
  const [user, setUser] = useState(loggedIn())

  useEffect(() => {
    fetch(listingsURL)
      .then(parseJSON)
      .then(setListings)

    document.body.classList.add("index-page")
    document.body.classList.add("sidebar-collapse")
    document.documentElement.classList.remove("nav-open")
    window.scrollTo(0, 0)
    document.body.scrollTop = 0

    return function cleanup() {
      document.body.classList.remove("index-page")
      document.body.classList.remove("sidebar-collapse")
    }
  }, [])


  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <IndexNavbar user={user} navbarDefault={'navbar-transparent'} />
          <Index />
        </Route>

        <Route exact path="/index"> 
          <IndexNavbar user={user} navbarDefault={'navbar-transparent'} />
          <Index />
        </Route>

        <Route exact path="/shop">
          <IndexNavbar user={user} navbarDefault="" />
          <ShopPage listings={listings}/>
        </Route>

        <Route exact path="/shop/:id">
          <IndexNavbar user={user} navbarDefault="" />
          <ListingPage listings={listings}/>
        </Route>

        <Route exact path="/sell">
          <IndexNavbar user={user} navbarDefault="" />
          <Sell/>
        </Route>

        <Redirect to="/" render={(routerProps) => <Index {...routerProps} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
