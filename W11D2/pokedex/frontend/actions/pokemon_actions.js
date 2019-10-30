import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

// normal action creator
export const receiveAllPokemon = (pokemon) =>  {  
  // normal action
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
  };  
  // end normal action
};

export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

// dispatch(es5RequestAllPokemon());
// you typically do this line above in you your
// mapDispatchToProps
// es5RequestAllPokemon: () => dispatch(es5RequestAllPokemon());

// Thunk Action Creator
export function es5RequestAllPokemon() {

  // Thunk Action
  return function(dispatch) {
    return APIUtil.fetchAllPokemon()
      .then(function(pokemon) {
        return dispatch(receiveAllPokemon(pokemon));
      });
  };
  // End Action
}