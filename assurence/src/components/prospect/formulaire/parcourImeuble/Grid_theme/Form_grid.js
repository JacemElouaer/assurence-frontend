import React from 'react'
import BaseIndex from './BaseIndex'
function Form_grid(props) {
  return (
    <BaseIndex text={props.text}>
        <div class="shadow-lg  border-4 border-gray-400 rounded-md lg:w-3/3 md:w-full  bg-white p-5 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 selection:  place-items-center ">
            {props.children}
        </div>
    </BaseIndex>
  )
}

export default Form_grid