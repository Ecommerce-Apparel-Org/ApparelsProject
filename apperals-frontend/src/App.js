import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Collections from './pages/Collections';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        {/* add components here */}
        <Navigation />

        {/* Define Routes here*/}
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
