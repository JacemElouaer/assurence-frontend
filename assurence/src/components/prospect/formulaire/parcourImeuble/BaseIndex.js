import React from 'react'

function BaseIndex(props) {
  return (
    <div className="space-y-1">  
    <div className="">
      <div className='container'>
        <p>
          {props.text}
        </p>
      </div>
    </div>
    <div className="w-full flex justify-center ">
        {props.children}
    </div>
    </div>
  )
}

export default BaseIndex