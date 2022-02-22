import React  ,  {useState} from 'react'
import Three_Option_Base from './Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 

function NiveauImmeuble() { 
    let [type_immeuble ,  setType] =  useState(0)
    const change= (e)=> {
        if(e.target.id === "Appartement"){
        setType("Appartement")} 
        if(e.target.id ===  "Maison"){
        setType("Maison")} 
        if(e.target.id ===  "Immeuble"){
        setType("Immeuble")} 
    };
  return (
    
    <Three_Option_Base text="Combien de niveaux sous sols comporte  ">
         <div onClick={change} id="Appartement"    >
          <GridOption   id="Appartement"  choix={type_immeuble } src={null}    text_option="5 niveaux ou moins"/>
          </div>
          <div onClick={change} id="Maison"    >
          <GridOption id="Maison"  choix={type_immeuble } src={null} text_option="Entre 6 et 8  niveaux"/>
          </div>
          <div onClick={change} id="Immeuble"  >
          <GridOption id="Immeuble" choix={type_immeuble } src={null}   text_option="9  niveaux ou plus"/>
          </div>

    </Three_Option_Base>

  )
}

export default NiveauImmeuble
