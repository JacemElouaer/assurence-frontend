import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import  Button from "../../../utils/Button"
function NiveauImmeuble() { 
    let [niveau_immeuble ,  setType] =  useState("5 niveaux ou moins")
    const change= (e)=> {
        setType(e.target.id)
    };
    console.log(niveau_immeuble)
    const  senddata =(e)=>{}
  return (
    <div>
    <Three_Option_Base text="Combien de niveaux sous sols comporte ">
         <div onClick={change} id="5 niveaux ou moins"    >
          <GridOption   id="5 niveaux ou moins"  choix={niveau_immeuble } src={null}    text_option="5 niveaux ou moins"/>
          </div>
          <div onClick={change} id="Entre 6 et 8 niveaux"    >
          <GridOption id="Entre 6 et 8 niveaux"  choix={niveau_immeuble } src={null} text_option="Entre 6 et 8 niveaux"/>
          </div>
          <div onClick={change} id="9 niveaux ou plus"  >
          <GridOption id="9 niveaux ou plus" choix={niveau_immeuble } src={null}   text_option="9 niveaux ou plus"/>
          </div>
    </Three_Option_Base> 
    <div>
    {niveau_immeuble ? 
          <div onClick={senddata}><Button Suivant="Immeuble/Niveausous_sol" /></div>: 
          undefined} 
      </div>

    </div>

  )
}

export default NiveauImmeuble
