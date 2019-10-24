import React from 'react';
import {Board} from './minesweeper.js';
import BoardComp from './board.jsx';
import TileComp from './tile.jsx';
import { ifError } from 'assert';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Board(4, 4)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, boolean) {
    console.log(tile);
    if(boolean === false){
      tile.props.tile.explore();
    } else {
      tile.props.tile.toggleFlag();
    }

    if(tile.props.tile.bombed){
      tile.props.tile.board.lost();
    }
    return this.setState({ board: this.state.board });
  }

  render(){

    const gameProps = {
      board: this.state.board,
      update: this.updateGame
    }

    return(
      <div className="board">
        <BoardComp gameStuff = {gameProps}/>
        {/* <TileComp updateGame = {this.updateGame} /> */}
      </div>
    )
  }
}

export default Game;