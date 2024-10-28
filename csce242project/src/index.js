import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <App />
);

