import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import  Button from "../../../utils/Button"
function TypeImmeuble() { 
    let [niveau_immeuble ,  setType] =  useState("stading")
    const change= (e)=> {
        setType(e.target.id)
    };
    const  senddata =(e)=>{}
  return (
    <div>
    <Three_Option_Base text="Combien de niveaux sous sols comporte ">
         <div onClick={change} id="stading"    >
          <GridOption   id="stading"  choix={niveau_immeuble } src={null}    text_option="De stading"/>
          </div>
          <div onClick={change} id="standard"    >
          <GridOption id="standard"  choix={niveau_immeuble } src={null} text_option="Standard"/>
          </div>
          <div onClick={change} id="historique"  >
          <GridOption id="historique" choix={niveau_immeuble } src={null}   text_option="Classé ou monument historique"/>
          </div>
    </Three_Option_Base> 
    <div>
    {niveau_immeuble ? 
       niveau_immeuble !== "historique"?
          <div onClick={senddata}><Button Suivant="Immeuble/PeriodConstruction" /></div>:  
          undefined :  
          undefined} 
      </div>

    </div>

  )
}

export default TypeImmeuble
