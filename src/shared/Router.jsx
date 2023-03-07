import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TDMain from '../pages/TDMain';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TDMain/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default Router