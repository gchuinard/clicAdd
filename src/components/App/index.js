/**
 * Imports de dépendances
 */
import React from 'react';

/**
 * Imports locaux
 */
// Composants React
// Données
// Styles et assets
import './app.sass';

/**
 * Code
 */

let nbr = 0;

function addClick() {
  nbr += 1;
  document.getElementById('clic').innerHTML = nbr;
}

function zeroClick() {
  nbr = 0;
  document.getElementById('clic').innerHTML = nbr;
}

const App = () => {
  return <div id="app">
    <h1 id="app-title">Exercice clic</h1>
    <button type="button" onClick={() => addClick()}>Nombre de clic : <span id="clic">0</span></button> 
    <button type="button" onClick={() => zeroClick()}>Remise a 0 du nombre de clic</button> 
  </div>;
};

/**
 * Export
 */
export default App;
