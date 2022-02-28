import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import  Button from "../../../utils/Button"
import immeuble from  '../../../../assets/image_finale/standing.png'
import immeuble_colorer from  '../../../../assets/image_finale/standing_colorer.png'

import immeuble_large_colorer from  '../../../../assets/image_finale/immeuble_large_colorer.png'
import immeuble_large from  '../../../../assets/image_finale/immeuble_large.png'
import immeuble_xxlarge from  '../../../../assets/image_finale/immeuble_xxlarge.png'
import immeuble_xxlarge_colorer from  '../../../../assets/image_finale/immeuble_xxlarge_colorer.png'
import  { useDispatch , useSelector} from  'react-redux'
import {save_niveau_immeuble} from '../../../../redux/actions/ImmeubleData'

function NiveauImmeuble() { 
  const dispatch = useDispatch()
    let [niveau_immeuble ,  setType] =  useState("5 niveaux ou moins")
    const change= (e)=> {
        setType(e.target.id)
    };
    console.log(niveau_immeuble)
    const  senddata =(e)=>{
      e.preventDefault() ; 
      dispatch(save_niveau_immeuble(niveau_immeuble))
    }
  return (
    <div> 
    <Three_Option_Base text="Combien de niveaux comporte votre immeuble ? ">
         <div onClick={change} id="5 niveaux ou moins"    >
          <GridOption   id="5 niveaux ou moins"  choix={niveau_immeuble } src={immeuble}  src_c={immeuble_colorer}  text_option="5 niveaux ou moins"/>
          </div>
          <div onClick={change} id="Entre 6 et 8 niveaux"    >
          <GridOption id="Entre 6 et 8 niveaux"  choix={niveau_immeuble } src={immeuble_large} src_c={immeuble_large_colorer} text_option="Entre 6 et 8 niveaux"/>
          </div>
          <div onClick={change} id="9 niveaux ou plus"  >
          <GridOption id="9 niveaux ou plus" choix={niveau_immeuble } src={immeuble_xxlarge} src_c={immeuble_xxlarge_colorer}   text_option="9 niveaux ou plus"/>
          </div>
    </Three_Option_Base> 
    <div class="h-12"></div>
    <div>
    {niveau_immeuble ? 
          <div onClick={senddata}><Button Suivant="Immeuble/Niveausous_sol" /></div>: 
          undefined} 
      </div>

    </div>

  )
}

export default NiveauImmeuble
