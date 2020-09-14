import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManegement from './components/PatientManegement/PatientManegement';

function App() {
  return (
    <div className="App">
      <ReducerCount/>
      <PatientManegement/>
    </div>
  );
}

export default App;
