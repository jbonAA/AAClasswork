import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: PokemonReducer

});

export default entitiesReducer; 
