import React from 'react';
import ReactDom from 'react-dom';
import { Tile } from './minesweeper';


class TileComp extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(event) {
    // event.preventDefault();
    debugger
    console.log(event)
    console.log(event.type)
    let flagged = true;
    if(event.type === 'click'){
      flagged = false;
    }

    return this.props.update(this, flagged);
  }
  
  render(){
    // console.log(this)
    //explore
    //adjacentbombs
    //flagged
    let value = " ";
    if (this.props.tile.flagged === true){
      value = 'f';
    };
    
    if (this.props.tile.explored === true){
      value = this.props.tile.adjacentBombCount();
    };
    
    if (this.props.tile.bombed === true ){
      value = 'b';
    };

    if(this.props.tile.bombed === true && this.props.tile.explored === true){
      alert ('you lose lol');
    }
   
    
    return(
      <div className="tile">
        <div className="button" onClick={() => this.handleClick()} onAuxClick={(e) => this.handleClick(e)}>{value}</div>
      </div>
    )
  }
}




export default TileComp; 