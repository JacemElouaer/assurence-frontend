import React  , {useState} from 'react'
import  Three_Option_Base from  './Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 

function Niveausous_sol() { 
let [N_sous_sol ,  setNive] =  useState(0)
  const change= (e)=> {
    if(e.target.id === "Appartement"){
      setNive("Appartement")} 
    if(e.target.id ===  "Maison"){
      setNive("Maison")} 
    if(e.target.id ===  "Immeuble"){
      setNive("Immeuble")} 
};
  return (
    <Three_Option_Base>
        <div onClick={change} id="Appartement"  className="dblclick"  >
          <GridOption   id="Appartement"  choix={N_sous_sol } src={null}    text_option="Un Appartement"/>
          </div>
          <div onClick={change} id="Maison"   className="dblclick" >
          <GridOption id="Maison"  choix={N_sous_sol } src={null} text_option="Un Maison"/>
          </div>
          <div onClick={change} id="Immeuble"  className="dblclick">
          <GridOption id="Immeuble" choix={N_sous_sol } src={null}   text_option="Un Immeuble"/>
          </div>


    </Three_Option_Base>

  )
}

export default Niveausous_sol