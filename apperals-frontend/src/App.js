// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      {/* add components here */}
      <Navigation />
    </div>
  );
}

export default App;
