import React from 'react'
import './Board.css';
import Tile from './Tile';

const Board = (props) => {

  tiles_map = props.tiles.map( (tile) => {
      return <Tile tile= {...tile}/>
  })

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {tiles_map}
    </div>
  )
}

export default Board
