import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Home from "./pages/home"
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <App />
);

