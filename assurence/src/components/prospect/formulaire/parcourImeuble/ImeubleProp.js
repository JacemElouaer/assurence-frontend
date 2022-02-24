import React , {useState} from 'react'
import GridOption from "../../../utils/gridOption"
import Three_Option_Base from  './Grid_theme/Three_Option_Base'
import Button from '../../../utils/Button';
function ImeubleProp() {
  let [propriete ,  setType] =  useState("")
  const change= (e)=> {
     setType(e.target.id)
 }; 
 const  senddata =()=>{
   
 }
return (
 <div>
 <Three_Option_Base text="Alors ,  votre immeuble est considerer comme  ?  ">
      <div onClick={change} id="monopropriété">
       <GridOption   id="monopropriété"  choix={propriete } src={"null"}    text_option="En monopropriété"/>
       </div>
       <div onClick={change} id="copropriété" >
       <GridOption id="copropriété"  choix={propriete } src={"null"} text_option="En copropriété"/>
       </div>
       <div onClick={change} id="HLM">
       <GridOption id="HLM" choix={propriete } src={"null"}   text_option="HLM"/>
       </div>
       
 </Three_Option_Base>
 <div>
 {propriete ==="copropriété" ? 
       <div onClick={senddata}><Button Suivant="Immeuble/TypeCoprepriete" /></div>:
       <div onClick={senddata}><Button Suivant="Immeuble/TypeImmeuble" /></div>
        } 
   </div>
</div>
)
}

export default ImeubleProp