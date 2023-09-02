import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" component={Menu}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
