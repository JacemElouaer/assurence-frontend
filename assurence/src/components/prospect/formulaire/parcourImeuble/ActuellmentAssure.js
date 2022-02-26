import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button from '../../../utils/Button'
function ActuellmentAssure() { 
  
  let  boccupation =  "oui"
/*  if(data.resiliation !=="") {
    bresiliation =  data.resiliation ===false ?  "non"  :  "oui" 
   }*/

  const dispatch =  useDispatch()
  let [assure ,  setAssure] =  useState(boccupation)  

 const change= (e)=> {
   
    if (e.target.id === "oui"){
      setAssure("oui")
    } 
    if(e.target.id ===  "non"){
      setAssure("non")
    }
 };
 const  senddata =()=>{

 }
 
  return (
    <div>

    <Two_Option_Base text="Etes-vous actuallement assuré pour votre immeuble ? ">
          <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={assure} option_text="Oui"/>
        </div>
        <div onClick={change} id="non">
        <GridbinaryOption id="non" type="non"  choix={assure} option_text="Non"/>
        </div>
    </Two_Option_Base>
   
    {assure ==="oui"? 
          <div onClick={senddata}><Button Suivant="Immeuble/BesoinResilierImmeuble" /></div>:  
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>
          
      }
    </div>
  )
}

export default ActuellmentAssure
