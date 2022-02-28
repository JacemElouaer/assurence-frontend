import React  , {useState }from 'react'
import Button  from  '../../../utils/Button'
import Form_grid from './Grid_theme/Form_grid'
import  { useDispatch , useSelector} from  'react-redux'
import {save_coordonner_client} from '../../../../redux/actions/ImmeubleData'


function ImmeubleProspectInfo() { 


  const dispatch =  useDispatch()

let  [prenom , setPrenom] =  useState(undefined) 
let  [nom , setNom] =  useState(undefined) 
let  [email , setEmail] =  useState(undefined) 
let  [telephone , setTelephone] =  useState(undefined) 

const  changePrenom =(e)=>{
  setPrenom(e.target.value) 
} 
const  changeNom =(e)=>{
  setNom(e.target.value) 
}   
const  changeEmail =(e)=>{
  setEmail(e.target.value) 
} 
const  changeTele =(e)=>{
  setTelephone(e.target.value)  
}       
const  senddata = (e) =>{
  dispatch(save_coordonner_client({nom , prenom ,email ,  telephone }))
}


  return (
    <Form_grid text="Merci ! Faison plus ample connaissance ?">
    
    <div class="flex flex-wrap gap-8  mb-4">
        <div class="w-full md:w-60 ">
      <label for="name" class="leading-7 text-xs text-gray-600">Votre prénom</label>
      <input onChange={changePrenom} type="text" id="name" placeholder="test prénom" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="w-full md:w-60">
      <label for="name" class="leading-7 text-xs text-gray-600">Votre nom </label>
      <input   onChange={changeNom} type="text" id="name" name="name" placeholder="test nom" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div class="flex flex-wrap gap-8  mb-4">
        <div class="w-full md:w-60 ">
      <label for="email" class=" leading-7 text-xs text-gray-600">Votre email</label>
      <input onChange={changeEmail} type="text" id="name" name="name"  placeholder="test@gmail.com" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="w-full md:w-60">
      <label for="name" class="leading-7 text-xs text-gray-600">Votre numéro de téléphone </label>
      <input   onChange={changeTele} type="text" id="name" placeholder="06000000"  name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    </div>
    <div class="relative mb-4">
      
    </div>
    <div class="relative mb-4">
      
      </div>
   
    {nom && prenom && email  && telephone ? 
          <div onClick={senddata}><Button Suivant="Immeuble/DateAssembleGenerale" /></div>:  
          undefined
      }
      </Form_grid>

  
  )
}

export default ImmeubleProspectInfo