import Home from "./components/Home";
import About from './components/About';
import Contact from "./components/Contact";
import React from 'react';
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path = '/contact' component = {Contact} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/' component = {Home}/>
      </Switch>
    </React.Fragment>
  );
}
//<Home></Home>
//<Contact></Contact>
//<About></About>
export default App;
