export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};


// connect(mapStateToProps, mapDispatchToProps)(MyComponent)