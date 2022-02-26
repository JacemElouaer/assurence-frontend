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
    <Form_grid text="Pouvez vous nous informer sur les dimensions de votre immeuble ?">
   
    <div class="flex flex-wrap gap-8  mb-4">
        <div class="w-full md:w-60 ">
      <label for="name" class="leading-7 text-s text-gray-600">Surface el m</label>
      <input onChange={changeSurface} type="number" placeholder="2500" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="w-full md:w-60">
      <label for="name" class="leading-7 text-s text-gray-600">Nombre de lots </label>
      <input   onChange={changeLots} type="number" placeholder="15" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div class="relative mb-4">
      
    </div>
    <div class="relative mb-4">
      
      </div>
   
    {Nlots !== "" && surface !== "" ? 
          <div onClick={senddata}><Button Suivant="Immeuble/NiveauImmeuble" /></div>:  
          undefined
      }
      </Form_grid>

  
  )
}

export default ImmeubleGeneralinfo