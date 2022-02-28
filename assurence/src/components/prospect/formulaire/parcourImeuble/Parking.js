import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import {save_parking} from '../../../../redux/actions/ImmeubleData'

function Parking() { 
  const dispatch = useDispatch()
   
  let [type_parking, setParking]= useState("") 
  let parking_list_options = [ "Pas de parking " ,  "Place de parking" ,"Place de parking et box"  , "Box fermé"]
  const change= (e)=> {
    setParking(type_parking= e.target.id)
  };
   
  const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(save_parking(type_parking))
  }
  
   return ( 
    <div>
      <Listopptions text="Quel  type de parking  en sous-sol avez-vous ? ">
      {parking_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={type_parking}/></div>
      )}
       
    </Listopptions> 
    <div className="h-6"></div>
    <div>
    {type_parking !== ""? 
          <div onClick={senddata}><Button Suivant="Immeuble/ImeubleProp" /></div>:  undefined} 
      </div>
    </div>
  ) 
}

export default Parking