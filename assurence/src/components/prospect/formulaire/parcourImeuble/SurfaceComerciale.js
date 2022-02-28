import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridOption  from  "../../../utils/gridOption"  
import Button  from  '../../../utils/Button' 
import DialogEmail from '../../../utils/DialogEmail'
import  immeuble25 from  '../../../../assets/image_finale/immeuble25.png'
import  immeuble25_colorer from  '../../../../assets/image_finale/immeuble25_colorer.png'
import  immeuble26 from  '../../../../assets/image_finale/immeuble26.png'
import  immeuble26_colorer from  '../../../../assets/image_finale/immeuble26_colorer.png'
import  { useDispatch , useSelector} from  'react-redux'
import {save_surface_commerce} from '../../../../redux/actions/ImmeubleData'

function SurfaceComerciale() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Surface_C, setSurfaceCommerciale]= useState(0) 
  
  const senddata = (e)=>{
    e.preventDefault() ; 
    dispatch(save_surface_commerce(Surface_C))
  }

 
  const change= (e)=> {
    setSurfaceCommerciale(e.target.id )
};
 
  return (
  <div>
    <Two_Option_Base text="Quelle est la surface de l'immeuble occupé par des commerces ou activitès professionnel ? ">
          <div onClick={change} id="Entre 1 et 25%">
          <GridOption   id="Entre 1 et 25%"  choix={Surface_C} src={immeuble25} src_c={immeuble25_colorer}    text_option="Entre 1 et 25% de la surface de l'immeuble"/>
          </div>
          <div onClick={change} id="Plus de 26%">
          <GridOption id="Plus de 26%"  choix={Surface_C} src={immeuble26} src_c={immeuble26_colorer} text_option="Plus de 26% de la surface de l'immeuble"/>
          </div>
    </Two_Option_Base> 
    <div className='h-8'> </div>
    <div>
    {Surface_C ? 
    Surface_C==="Plus de 26%" ?  
    <DialogEmail/> : 
          <div onClick={senddata}><Button Suivant="Immeuble/ActiviteComerciale" /></div>:  
          undefined } 
      </div> 
  </div>
  )
}

export default SurfaceComerciale
