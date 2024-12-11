import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Collections from './components/pages/Collections';
import Home from './components/pages/Home';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
