import React from 'react';
import Clock from './components/Clock';
import Counter from './components/Counter';

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


// créer un composant fonctionnel qui affiche
// la somme des nombres de 1 à 10

const AddSuite = (props) => {
  let { start, end } = props;
  let total = 0;

  for(let step = start; step <= end; step++) {
    total += step;
  };

  return (
    <p>La somme des nombres de {start} à {end} est de {total}</p>
  )
}

function App() {
  return (
    <div>
      {/* <Bienvenue nom="Elisabeth"/>
      <Add a={5} b={8}/>
      <Add a={2} b={1229}/>
      <Add a={483} b={1928}/>
      <AddSuite start={1} end={10}/> */}
      <Clock/>
      <Counter/>
    </div>
  );
}

export default App;
