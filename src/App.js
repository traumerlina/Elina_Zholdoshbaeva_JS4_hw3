import logo from './logo.svg';
import './App.css';
import React from 'react';
import TestPage from './pages/testPage/TestPage';
import DemoPage from './pages/demoPage/DemoPage';


function App() {

  return (
    <div>

      <TestPage title = "Artificial intelligence"/>

      <DemoPage definition = "the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings"/>

    </div>
  );
}

export default App;
