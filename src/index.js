import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Checkout from "./Checkout";
import Home from "./Home";
import Header from "./Header";
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={reducer}>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  </StateProvider>
  </BrowserRouter>
);


