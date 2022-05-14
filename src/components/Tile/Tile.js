import React from 'react'

import './Tile.css'

const Tile = (props) => {

  tileColor = (props.selected || props.matched) ? {backgroundColor : props.color} : null;
  return (
    <div className='Tile' style= {tileColor}>
      {(props.selected == true) || (props.matched == true) ? <props.svg/> : null}
    </div>
  )
}

export default Tile
