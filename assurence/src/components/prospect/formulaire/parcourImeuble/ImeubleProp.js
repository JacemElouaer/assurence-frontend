import React , {useState} from 'react'
import GridOption from "../../../utils/gridOption"
import Three_Option_Base from  './Grid_theme/Three_Option_Base'
import mono   from  '../../../../assets/image_finale/mono.png'
import mono_colorer from  '../../../../assets/image_finale/mono_colorer.png'
import coprop  from  '../../../../assets/image_finale/coprop.png' 
import coprop_colorer from  '../../../../assets/image_finale/coprop_colorer.png'
import immeuble_xxlarge from  '../../../../assets/image_finale/immeuble_xxlarge.png'
import immeuble_xxlarge_colorer from  '../../../../assets/image_finale/immeuble_xxlarge_colorer.png'
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
       <GridOption   id="monopropriété"  choix={propriete } src={mono} src_c={mono_colorer}    text_option="En monopropriété"/>
       </div>
       <div onClick={change} id="copropriété" >
       <GridOption id="copropriété"  choix={propriete } src={coprop} src_c={coprop_colorer} text_option="En copropriété"/>
       </div>
       <div onClick={change} id="HLM">
       <GridOption id="HLM" choix={propriete } src={immeuble_xxlarge} src_c={immeuble_xxlarge_colorer}   text_option="HLM"/>
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