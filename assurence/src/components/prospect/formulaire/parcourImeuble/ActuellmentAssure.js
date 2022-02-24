import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"  
import  { useDispatch , useSelector} from  'react-redux'

function ActuellmentAssure() { 
  
  let  boccupation =  "oui"
/*  if(data.resiliation !=="") {
    bresiliation =  data.resiliation ===false ?  "non"  :  "oui" 
   }*/

  const dispatch =  useDispatch()
  let [occupation ,  setOccupation] =  useState(boccupation)  

 const change= (e)=> {
   
    if (e.target.id === "oui"){
      setOccupation("oui")
    } 
    if(e.target.id ===  "non"){
      setOccupation("non")
    }
 };
 
  return (
    
    <Two_Option_Base text="Etes-vous actuallement assuré pour votre immeuble ? ">
          <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={occupation} option_text="Oui"/>
        </div>
        <div onClick={change} id="non">
        <GridbinaryOption id="non" type="non"  choix={occupation} option_text="Non"/>
        </div>
    </Two_Option_Base>

  )
}

export default ActuellmentAssure
