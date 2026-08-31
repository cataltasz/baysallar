import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL || ''}>
        <ScrollToTop />
        <div className="sections">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/urunler">
              <Products />
            </Route>
            <Route path="/iletisim">
              <Contact />
            </Route>
          </Switch>
        </div>
        <FloatingWhatsApp />
      </Router>
    </div>
  );
}

export default App;
