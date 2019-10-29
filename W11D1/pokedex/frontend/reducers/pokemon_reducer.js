import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      debugger;
    nextState[action.pokemon.id] = action.pokemon ;
    return nextState; 

    default: 
    return state; 

  }
};

export default pokemonReducer;