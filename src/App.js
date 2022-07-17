import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './styles/App.scss';
import AppRouter from "./components/AppRouter";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      
      <BrowserRouter>
        <Navbar/>
        <AppRouter>
        </AppRouter>
      </BrowserRouter>
    
  )
}

export default App;
