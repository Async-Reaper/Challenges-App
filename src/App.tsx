import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
