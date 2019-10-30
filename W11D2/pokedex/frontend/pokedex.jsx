import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from "./store/store";
import { receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from './util/api_util';
import {selectAllPokemon} from './reducers/selectors';

import Root from './components/root'




// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.store = store;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", ()=> {
const store = configureStore();
const root = document.getElementById("root")
ReactDOM.render(<Root store={store}/>, root) 
});


