import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from "./store/store";
import {receiveAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from './util/api_util';



document.addEventListener("DOMContentLoaded", ()=> {
const root = document.getElementById("root")
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch


  ReactDOM.render(<marquee behavior="alternate" direction="">I love Pokemon</marquee>, root) 
});


