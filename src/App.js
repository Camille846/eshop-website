import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
