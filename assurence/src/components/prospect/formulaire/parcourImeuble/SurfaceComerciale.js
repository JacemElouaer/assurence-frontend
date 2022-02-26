import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridOption  from  "../../../utils/gridOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button  from  '../../../utils/Button' 
import DialogEmail from '../../../utils/DialogEmail'
import  immeuble25 from  '../../../../assets/image_finale/immeuble25.png'
import  immeuble25_colorer from  '../../../../assets/image_finale/immeuble25_colorer.png'
import  immeuble26 from  '../../../../assets/image_finale/immeuble26.png'
import  immeuble26_colorer from  '../../../../assets/image_finale/immeuble26_colorer.png'

function SurfaceComerciale() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Usage, setUsage]= useState(0) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
  }

 
  const change= (e)=> {
    setUsage(e.target.id )
};
 
  return (
  <div>
    <Two_Option_Base text="Quelle est la surface de l'immeuble occupé par des commerces ou activitès professionnel ? ">
          <div onClick={change} id="Entre 1 et 25%">
          <GridOption   id="Entre 1 et 25%"  choix={Usage} src={immeuble25} src_c={immeuble25_colorer}    text_option="Entre 1 et 25% de la surface de l'immeuble"/>
          </div>
          <div onClick={change} id="Plus de 26%">
          <GridOption id="Plus de 26%"  choix={Usage} src={immeuble26} src_c={immeuble26_colorer} text_option="Plus de 26% de la surface de l'immeuble"/>
          </div>
    </Two_Option_Base>
    <div>
    {Usage ? 
    Usage==="Plus de 26%" ?  
    <DialogEmail/> : 
          <div onClick={senddata}><Button Suivant="Immeuble/ActiviteComerciale" /></div>:  
          undefined } 
      </div> 
  </div>
  )
}

export default SurfaceComerciale
