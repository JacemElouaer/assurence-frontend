import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button from '../../../utils/Button'
import  facade from  '../../../../assets/image_finale/facade.png'
import  facade_colorer from  '../../../../assets/image_finale/facade_colorer.png'
import  plumber from  '../../../../assets/image_finale/robinet.png'
import  plumber_colorer from  '../../../../assets/image_finale/rubinet_colorer.png'
import  roof from  '../../../../assets/image_finale/roof.png'
import  roofing_color from  '../../../../assets/image_finale/roofing_colorer.png'
import {save_traveaux} from '../../../../redux/actions/ImmeubleData'


var  install_depandance = []
function TravauxRenovation() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  let [counter, setCounter]= useState(0) 
  let [Traveaux, setTravaux]= useState(install_depandance) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(save_traveaux(Traveaux))
  }

 
  function change(e) {
    e.preventDefault();
    if (install_depandance.includes(e.target.id)){
      install_depandance = install_depandance.filter(dept => dept!==e.target.id);
      setCounter(counter = counter-1); 
    }
    else {
      install_depandance.push(e.target.id);
      setCounter(counter =  counter+1); 
    } 
    setTravaux( install_depandance)
  }
 
  return (
    <div>
    <Three_Option_Base text="Des travaux ont-ils été réalisés dans l'immeuble au cours des 15 dernières années ">
          <div  id="Plombier" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Plombier"  choix={Traveaux} src={plumber} src_c={plumber_colorer}    text_option="Plombier"/>
          </div>
          <div  id="Toiture" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Toiture"  choix={Traveaux} src={roof} src_c={roofing_color} text_option="Toiture"/>
          </div>
          <div  id="Facade" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Facade" choix={Traveaux} src={facade} src_c={facade_colorer}  text_option="Facade"/>
          </div>

    </Three_Option_Base>
    <div>
    {Traveaux ? 
          <div onClick={senddata}><Button Suivant="Immeuble/UsageImmeuble" /></div>:  
          undefined } 
      </div> 
    </div>

  )
}

export default TravauxRenovation
