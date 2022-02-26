import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
function Occupation() { 
   
  let occupation_list_options = ["Occupé pour plus de 75% de sa surface " ,  "Occupé entre 50% et 75% de sa surface " , 
   "Occupé pour moins de 50% de sa surface" , "Non, inoccupé et/ou arreté de péril "]
   
      let [type_parking, setParking]= useState("he") 

   
     const change= (e)=> {
    setParking(type_parking= e.target.id)
   };
   const senddata = () =>{

   }
   
   

  return ( 
    <div>
      <Listopptions text=" L'immeuble est t'il .. ? ">
      {occupation_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={type_parking}/></div>
      )}
    </Listopptions>
    { type_parking ? 
          
          <div onClick={senddata}><Button Suivant="Immeuble/PourcentagePropreitaire" /></div>:   
          undefined
       }
    </div>
  ) 
}

export default Occupation