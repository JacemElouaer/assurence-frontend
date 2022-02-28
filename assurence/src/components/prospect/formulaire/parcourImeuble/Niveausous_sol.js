import React  , {useState} from 'react'
import  Three_Option_Base from  './Grid_theme/Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import Button from '../../../utils/Button' 
function Niveausous_sol() { 
let [N_sous_sol ,  setNive] =  useState(0)
  const change= (e)=> {
      setNive(e.target.id)
};
const  senddata=(e)=>{
  e.preventDefault();
}
  return (
    <div>
    <Three_Option_Base text ="Combien de niveaux sous sols comporte votre immeuble ? ">
        <div onClick={change} id="Aucun"  className="dblclick"  >
          <GridOption   id="Aucun"  choix={N_sous_sol } src={null}    text_option="Aucun"/>
          </div>
          <div onClick={change} id="Moin de 3 niveaux"   className="dblclick" >
          <GridOption id="Moin de 3 niveaux"  choix={N_sous_sol } src={null} text_option="Moin de 3 niveaux"/>
          </div>
          <div onClick={change} id="3 niveaux ou plus"  className="dblclick">
          <GridOption id="3 niveaux ou plus" choix={N_sous_sol } src={null}   text_option="3 niveaux ou plus"/>
          </div>
   </Three_Option_Base> 
   <div className="h-8"></div>
   <div>
     { N_sous_sol ? 
          <div onClick={senddata}><Button Suivant="Immeuble/Parking" /></div>:  
          undefined
       }
    </div>
    </div>
  )
}

export default Niveausous_sol