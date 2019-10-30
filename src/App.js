import React from 'react';
import logo from './logo.svg';
import './App.css';

function Bienvenue(props) {
  return (
    <h2>Bienvenue, { props.nom } !</h2>
  )
}

function App() {
  return (
    <div>
      <Bienvenue nom="Elisabeth"/>
    </div>
  );
}

export default App;
