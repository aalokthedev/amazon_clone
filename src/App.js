import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 
import Cart from './Cart';


function App() {
  return (
    <Router>
    <div className="app">

      
    <Header/>
      <Switch>
        
          <Route path="/checkout">
         <Cart/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>


      </Switch>    

          </div>

      </Router>
      
   
  );
}

export default App;
