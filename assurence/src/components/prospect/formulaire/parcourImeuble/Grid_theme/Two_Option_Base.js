import React from 'react'
import BaseIndex from './BaseIndex'
function Two_Option_Base(props) {
  return (
      <BaseIndex text={props.text}>
    <div className="grid grid-cols-1  s:grid-cols-2 gap-4 md:gap-7 grid-shape mt-2">
        {props.children}
    </div>
    </BaseIndex>
  )
}

export default Two_Option_Base