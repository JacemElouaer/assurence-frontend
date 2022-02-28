import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import {save_occupation} from '../../../../redux/actions/ImmeubleData'

function Occupation() { 
  const  dispatch = useDispatch()
   
  let occupation_list_options = ["Occupé pour plus de 75% de sa surface " ,  "Occupé entre 50% et 75% de sa surface " , 
   "Occupé pour moins de 50% de sa surface" , "Non, inoccupé et/ou arreté de péril "]
   
      let [Ocupation, setOccupation]= useState("") 

   
     const change= (e)=> {
    setOccupation(Ocupation= e.target.id)
   };
   const senddata = (e) =>{
      e.preventDefault();
      dispatch(save_occupation(Ocupation))
   }
   
   

  return ( 
    <div>
      <Listopptions text=" L'immeuble est t'il .. ? ">
      {occupation_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={Ocupation}/></div>
      )}
    </Listopptions>
    { Ocupation ? 
          
          <div onClick={senddata}><Button Suivant="Immeuble/PourcentagePropreitaire" /></div>:   
          undefined
       }
    </div>
  ) 
}

export default Occupation