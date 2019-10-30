import React from 'react';
import logo from './logo.svg';
import './App.css';

function Bienvenue(props) {
  return (
    <h2>Bienvenue, { props.nom } !</h2>
  )
}

// créer un composant fonctionnel qui admet 2 propriétés
// a & b qui affiche "la somme de a et b = a + b"

const Add = (props) => {
  let { a, b } = props;

  return (
    <p>La somme de {props.a} et {props.b} = {props.a + props.b} </p>
  );
};

function App() {
  return (
    <div>
      <Bienvenue nom="Elisabeth"/>
      <Add a={5} b={8}/>
      <Add a={2} b={1229}/>
      <Add a={483} b={1928}/>
    </div>
  );
}

export default App;
