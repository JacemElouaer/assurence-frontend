import React from 'react'

function BaseIndex(props) {
  return (
    
    <div className="space-y-2 w-full">  
    <div className="mx-auto w-full md:w-900">
      <div className='container w-4/5 justify-center mx-auto '>
        <h1 class=" text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans">
          {props.text} 
        </h1>
      </div>
    </div>
    <div className="w-4/5 flex  mx-auto items-center ">
        {props.children}
    </div>
    </div>
  )
}

export default BaseIndex