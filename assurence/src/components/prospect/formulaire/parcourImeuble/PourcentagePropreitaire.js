import React  , {useState } from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"   
import Button  from  '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import {save_tauxOccupation} from '../../../../redux/actions/ImmeubleData' 



function PourcentagePropreitaire() {
   
    
   
     const dispatch =  useDispatch()
     let [pourcentage ,  setPourc] =  useState("oui")  
     
   
    const change= (e)=> {
      
        if (e.target.id === "oui"){
         setPourc("oui")
       } 
       
         if(e.target.id ===  "non"){
         setPourc("non")
         }
    };
    
  const  senddata =(e)=>{
    e.preventDefault(); 
    dispatch(save_tauxOccupation(pourcentage))
  }

  return ( <div>
     <Two_Option_Base text="Plus de 50% des propriétaire sont occupants dans l'immeuble ? ">
    <div onClick={change} id="oui"> 
    <GridbinaryOption id="oui" type="oui"  choix={pourcentage} option_text="Oui"/>
    </div>
    <div onClick={change} id="non">
    <GridbinaryOption id="non" type="non"  choix={pourcentage} option_text="Non"/>
    </div>
   
     </Two_Option_Base>
     <div>
     {pourcentage ? 
           
         <div onClick={senddata}><Button Suivant="Immeuble/NombreSinistreImmeuble" /></div> :   
           undefined} 
       </div>
     </div>
  )
}

export default PourcentagePropreitaire