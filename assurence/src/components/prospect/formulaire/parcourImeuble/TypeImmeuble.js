import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import  Button from "../../../utils/Button"
import DialogEmail from "../../../utils/DialogEmail"
import  historique from  '../../../../assets/image_finale/historique.png'
import  historique_colorer from  '../../../../assets/image_finale/historique-colorer.png'
import  standard from  '../../../../assets/image_finale/standard.png'
import  standard_colore from  '../../../../assets/image_finale/standard_colore.png'
import  standing from  '../../../../assets/image_finale/standing.png'
import  standing_colorer from  '../../../../assets/image_finale/standing_colorer.png'
import  { useDispatch , useSelector} from  'react-redux'
import {save_type_immeuble} from '../../../../redux/actions/ImmeubleData'

function TypeImmeuble() { 
  const dispatch = useDispatch()
    let [type_immeuble ,  setType] =  useState("stading")
    const change= (e)=> {
        setType(e.target.id)
    };
    const  senddata =(e)=>{
      e.preventDefault() ;
      dispatch(save_type_immeuble(type_immeuble))
    }
  return (
    <div>
    <Three_Option_Base text="Combien de niveaux sous sols comporte ">
         <div onClick={change} id="stading"    >
          <GridOption   id="stading"  choix={type_immeuble } src={standing} src_c={standing_colorer}    text_option="De stading"/>
          </div>
          <div onClick={change} id="standard"    >
          <GridOption id="standard"  choix={type_immeuble } src={standard} src_c={standard_colore} text_option="Standard"/>
          </div>
          <div onClick={change} id="historique"  >
          <GridOption id="historique" choix={type_immeuble } src={historique} src_c={historique_colorer}   text_option="Classé ou monument historique"/>
          </div>
    </Three_Option_Base> 
    <div>
    {type_immeuble ? 
       type_immeuble !== "historique"?
          <div onClick={senddata}><Button Suivant="Immeuble/PeriodConstruction" /></div>:  
          <DialogEmail/> :  
          undefined} 
      </div>

    </div>

  )
}

export default TypeImmeuble
