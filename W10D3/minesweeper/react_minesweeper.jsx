import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx'

document.addEventListener("DOMContentLoaded", () =>{
  const rootDiv = document.getElementById("root"); 
  console.log(rootDiv);
  ReactDOM.render(<Game />, rootDiv);
}) 