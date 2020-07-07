import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/home.js';
import Menu from './components/Menu/menu';
import Services from './components/Services/services';
import Contact from './components/Contact/contact'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component  {
  render() {
    return(
       <Router>
         <div className="App">
           <Navigation />
           <Home />
           <Menu />
           <Services />
           <Contact />
           <Switch>
              <Route path= '/' exact component={Home}/>
              <Route path= '/menu' component={Menu} />
              <Route path='/services' component={Services} />
              <Route path='/contact' component={Contact} />
           </Switch>
         </div>
      </Router>

    );
  }
 
  
}



export default App;
