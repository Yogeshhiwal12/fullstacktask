import React from "react";
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import View from "./components/View";
import Table from "./components/Table";

function App() {
  return (
    <BrowserRouter>
    <div>
    
    
    
    
    <Routes>
      <Route path='/details' element={<View/>} />
      <Route path='/' element={<Table/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
