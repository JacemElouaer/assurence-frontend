import React  ,  {useState } from 'react'
import Three_Option_Base from './Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 

 
   
function NatureImmeuble() {
     let [type_immeuble ,  setType] =  useState(0)
     const change= (e)=> {
        if(e.target.id === "Standard"){
        setType("Standard")} 
        if(e.target.id ===  "standing"){
        setType("standing")} 
        if(e.target.id ===  "historique"){
        setType("historique")} 
    };
  return (
    
    <Three_Option_Base text="Alors ,  votre immeuble est considerer comme  ?  ">
         <div onClick={change} id="Standrad"  >
          <GridOption   id="Standard"  choix={type_immeuble } src={null}    text_option="Standard"/>
          </div>
          <div onClick={change} id="standing" >
          <GridOption id="standing"  choix={type_immeuble } src={null} text_option="De standing"/>
          </div>
          <div onClick={change} id="historique">
          <GridOption id="historique" choix={type_immeuble } src={null}   text_option="Monument historique"/>
          </div>

    </Three_Option_Base>
  )
}

export default NatureImmeuble