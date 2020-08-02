import React from 'react'
import Bath from './bathroom'
import Bedroom from './bedroom'
import Kitchen from './kitchen'
import Livingroom from './livingroom'

const Floorplan = () => {
  return(
    <>
      <Livingroom />
      <Bath size='Half'/>
      <Bath size='Full'/>
      <Bedroom bedNum='1' />
      <Bedroom bedNum='2' />
      <Bedroom bedNum='3' />
      <Kitchen />
    </>
  )
}

export default Floorplan