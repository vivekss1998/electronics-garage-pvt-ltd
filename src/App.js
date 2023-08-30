import React from 'react';
import Header from './frontend/Header';
import Home from './frontend/Home';
import './App.css'; // You can include your global styles here
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
