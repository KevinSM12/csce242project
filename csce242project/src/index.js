import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Home from "./pages/home";
import Layout from "./layout";
import About from "./pages/about";
import Recordspage from "./pages/recordspage";
import Form from "./pages/form";
import Community from "./pages/community";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="recordspage"element={(<Recordspage />)} />
          <Route path="about"element={(<About />)} />
          <Route path="form"element={(<Form />)} />
          <Route path="community"element={(<Community />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <App />
);

