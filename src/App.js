import React from 'react';
import './App.css';
import Home from './components/pages/home'
import Products from './components/pages/products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/contact';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="sections">
          <Switch>
            <Route path='/' exact > <Home /> </Route>
            <Route path='/urunler'> <Products /> </Route>
            <Route path='/iletisim'> <Contact /> </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
