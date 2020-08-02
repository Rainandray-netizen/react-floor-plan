import React from 'react'
import Oven from './oven'
import Sink from './sink'

const Kitchen = () =>{
  return(
    <div>
      <h1>Kitchen</h1>
      <div>
        <Oven />
        <Sink />
      </div>
    </div>
  )
}

export default Kitchen