import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TDDetail from '../pages/TDDetail';
import TDMain from '../pages/TDMain';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TDMain/>}/>
        <Route path='/todos/:id' element={<TDDetail/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default Router