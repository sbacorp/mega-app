import React from 'react';
import {HashRouter} from "react-router-dom";
import './styles/App.scss';
import AppRouter from "./components/AppRouter";
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap-grid.css'

function App() {
  return (
      
      <HashRouter>
        <Navbar/>
        <AppRouter>
        </AppRouter>
      </HashRouter>
    
  )
}

export default App;
