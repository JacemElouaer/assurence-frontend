import React  ,  {useState} from 'react'
import Two_Option_Base from './Two_Option_Base'
import GridOption  from  "../../../utils/gridOption"  
import  { useDispatch , useSelector} from  'react-redux'

function SurfaceComerciale() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Usage, setUsage]= useState(0) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
  }

 
  const change= (e)=> {
    if(e.target.id === "Entre 1 et 25%"){
    setUsage("Entre 1 et 25%")} 
    if(e.target.id ===  "Plus de 26%"){
    setUsage("Plus de 26%")} 
};
 
  return (
    
    <Two_Option_Base text="Quelle est la surface de l'immeuble occupé par des commerces ou activitès professionnel ? ">
          <div onClick={change} id="Entre 1 et 25%">
          <GridOption   id="Entre 1 et 25%"  choix={Usage} src={null}    text_option="Entre 1 et 25% de la surface de l'immeuble"/>
          </div>
          <div onClick={change} id="Plus de 26%">
          <GridOption id="Plus de 26%"  choix={Usage} src={null} text_option="Plus de 26% de la surface de l'immeuble"/>
          </div>
         

    </Two_Option_Base>

  )
}

export default SurfaceComerciale
