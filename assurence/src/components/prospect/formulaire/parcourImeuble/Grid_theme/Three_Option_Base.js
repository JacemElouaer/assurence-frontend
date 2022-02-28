import React from 'react'
import BaseIndex from './BaseIndex'
function Three_Option_Base(props) {
  return (
      <BaseIndex text={props.text}>
    <div className="grid grid-cols-1  2xs:grid-cols-2 sm:grid-cols-3 gap-6  md:gap-8 place-items-center  mx-auto mt-5">
        {props.children}
    <div ></div>
    </div>
    </BaseIndex>
  )
}

export default Three_Option_Base