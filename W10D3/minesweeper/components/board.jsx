import React from 'react';
import ReactDom from 'react-dom';
import TileComp from './tile';
import { Board } from './minesweeper';

class BoardComp extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){

    const update = this.props.gameStuff.update
    let rows = this.props.gameStuff.board.grid.map( (row) =>{
      let rowComp = row.map( (tile) => {
        return (
            <TileComp tile={tile} update={update} />
        )
      });
      return (
        <div className="banana">
          {rowComp}
        </div>
      ) 
    });

    
    return(
      <div>
        {rows}
      </div>
    )
  }

}

export default BoardComp;

