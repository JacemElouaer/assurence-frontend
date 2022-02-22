import React  ,  {useState} from 'react'
import Two_Option_Base from './Two_Option_Base'
import GridOption  from  "../../../utils/gridOption"  
import  { useDispatch , useSelector} from  'react-redux'

function UsageImmeuble() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Usage, setUsage]= useState(0) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
  }

 
  const change= (e)=> {
    if(e.target.id === "Habitation"){
    setUsage("Habitation")} 
    if(e.target.id ===  "Commerciale/profissionnel"){
    setUsage("Commerciale/profissionnel")} 
};
 
  return (
    
    <Two_Option_Base text="L'immeuble est à usage ? ">
          <div onClick={change} id="Habitation"    >
          <GridOption   id="Habitation"  choix={Usage } src={"null"}    text_option="5 niveaux ou moins"/>
          </div>
          <div onClick={change} id="Commerciale/profissionnel"    >
          <GridOption id="Commerciale/profissionnel"  choix={Usage } src={"null"} text_option="Entre 6 et 8  niveaux"/>
          </div>
         

    </Two_Option_Base>

  )
}

export default UsageImmeuble
