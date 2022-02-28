import React from 'react'

function BaseIndex(props) {
  return (
    
    <div className="space-y-2 w-full ">  
    <div className="mx-auto w-full md:w-900">
    <div className="mx-auto w-full md:w-800  text-center ">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  
          text-center  font-sans lg:w-full "> 
          {props.text} 
        </p>
      </div>
    </div>
    <div className="h-4"> </div>
    <div className="w-full flex  mx-auto items-center ">
        {props.children}
    </div>
    </div>
  )
}

export default BaseIndex