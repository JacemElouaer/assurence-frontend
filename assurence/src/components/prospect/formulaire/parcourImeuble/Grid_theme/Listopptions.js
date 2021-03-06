import React from 'react'
import BaseIndex from './BaseIndex'
function Listopptions(props) {
  return (
      <BaseIndex text={props.text}>  
        <div class="flex flex-col grid-shape mt-5 justify-center mx-auto">
             {props.children}
        </div>
       </BaseIndex>
  )
}

export default Listopptions