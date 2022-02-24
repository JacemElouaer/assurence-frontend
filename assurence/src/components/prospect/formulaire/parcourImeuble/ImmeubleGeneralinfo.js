import React  , {useState }from 'react'
import Button  from  '../../../utils/Button'
import Form_grid from './Grid_theme/Form_grid'

function ImmeubleGeneralinfo() { 

let  [surface , setSurface] =  useState("") 
let  [Nlots , setNlots] =  useState("") 
const  changeSurface =(e)=>{
  setSurface(e.target.value) 
} 
const  changeLots =(e)=>{
  setNlots(e.target.value) 
}       
const  senddata = (e) =>{
  console.log("hello")
}


  return (
    <Form_grid>
    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
    <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
    <div class="flex flex-wrap gap-8  mb-4">
        <div class="w-full md:w-60 ">
      <label for="name" class="leading-7 text-s text-gray-600">Surface immeuble el m</label>
      <input onChange={changeSurface} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="w-full md:w-60">
      <label for="name" class="leading-7 text-sm text-gray-600">Nombre de lots </label>
      <input   onChange={changeLots} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div class="relative mb-4">
      
    </div>
    <div class="relative mb-4">
      
      </div>
    <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
   
    {Nlots !== "" && surface !== "" ? 
          <div onClick={senddata}><Button Suivant="Immeuble/NiveauImmeuble" /></div>:  
          undefined
      }
      </Form_grid>

  
  )
}

export default ImmeubleGeneralinfo