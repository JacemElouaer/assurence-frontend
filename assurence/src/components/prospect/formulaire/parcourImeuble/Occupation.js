import React  ,  {useState} from 'react'
import Listopptions from  './Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
function Occupation() { 
   
  
   
      let [type_parking, setParking]= useState("he") 

   
     const change= (e)=> {
    setParking(type_parking= e.target.id)
   };
   
   

  return ( 
      <Listopptions text="Quel  type de parking  en sous-sol avez-vous ? ">
        <div id="he" onClick={change}><ListitemOption text_option="pas de parking" id="he" choix={type_parking}/></div>
        <div id="he2" onClick={change}><ListitemOption text_option="pas de parking" id="he2" choix={type_parking}/></div>
        <div id="he3" onClick={change}><ListitemOption text_option="pas de parking" id="he3" choix={type_parking}/></div>

    </Listopptions>
  ) 
}

export default Occupation