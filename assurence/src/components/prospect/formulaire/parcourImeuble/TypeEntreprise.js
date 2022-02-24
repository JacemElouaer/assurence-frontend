import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
function TypeEntreprise() { 
   
  let [type_entreprise, setParking]= useState("") 
  let entreprise_list_options = [ "Un particulier " ,  "Une SCI" ,"Une ASL / une AFULL"  , "Un syndic bénévole" ,"Un syndic professionnel" ,"un membre du conseil syndical" , "Une SAS / une SARL "  ]
  const change= (e)=> {
    setParking(type_entreprise= e.target.id)
  };
   
  const senddata = (e)=>{}
  
   return ( 
    <div>
      <Listopptions text="Quel  type de parking  en sous-sol avez-vous ? ">
      {entreprise_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={type_entreprise}/></div>
      )}
       
    </Listopptions> 
    <div>
    {type_entreprise !== ""? 
          <div onClick={senddata}><Button Suivant="Immeuble/ImeubleProp" /></div>:  undefined} 
      </div>
    </div>
  ) 
}

export default TypeEntreprise