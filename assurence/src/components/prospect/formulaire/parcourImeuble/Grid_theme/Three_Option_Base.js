import React from 'react'
import BaseIndex from './BaseIndex'
function Three_Option_Base(props) {
  return (
      <BaseIndex text={props.text}>
    <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-7 place-items-center mt-2 mx-auto mt-5 ">
        {props.children}
    </div>
    </BaseIndex>
  )
}

export default Three_Option_Base