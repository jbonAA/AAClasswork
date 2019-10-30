import { requestAllPokemon } from  '../../actions/pokemon_actions';
import React from 'react';

class PokemonIndex extends React.Component{
  
  constructor(props){
    super(props);


  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
  
  render(){
    
    const pokemon = this.props.pokemon.map((el) => {

    })
    return (
      <div>
        <ul>
          {this.props.pokemon.map( (el) => { 
            return (
            <div>
              <li>{el.name}</li>
              <li><img src={el.image_url}></img></li>
            </div>
          )})};
        </ul>
      </div>
    );
  }
}

export default PokemonIndex
