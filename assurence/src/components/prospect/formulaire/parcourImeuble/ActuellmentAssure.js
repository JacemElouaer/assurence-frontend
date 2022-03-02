import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"  
import  { useDispatch , useSelector} from  'react-redux'
import {save_assurence} from '../../../../redux/actions/ImmeubleData'
import Button from '../../../utils/Button'

function ActuellmentAssure() { 
  const data   =  useSelector(state => state.ImmeubleFormReducer)
  
  let  bassurer =  data.Actuallement_assurer  ? data.Actuallement_assurer : ""
/*  if(data.resiliation !=="") {
    bresiliation =  data.resiliation ===false ?  "non"  :  "oui" 
   }*/

  const dispatch =  useDispatch()
  let [assure ,  setAssure] =  useState(bassurer)  

 const change= (e)=> {
   
    if (e.target.id === "oui"){
      setAssure("oui")
    } 
    if(e.target.id ===  "non"){
      setAssure("non")
    }
 };
 const  senddata =(e)=>{
  e.preventDefault();
  dispatch(save_assurence(assure))
 }
 
  return (
    <div>

    <Two_Option_Base text="Etes-vous actuallement assuré pour votre immeuble ? ">
          <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={assure} option_text="Oui"/>
        </div>
        <div onClick={change} id="non">
        <GridbinaryOption id="non" type="non"  choix={assure} option_text="Non"/>
        </div>
    </Two_Option_Base>
   
    {assure ==="oui"? 
          <div onClick={senddata}><Button Suivant="Immeuble/BesoinResilierImmeuble" /></div>:  
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>
          
      }
    </div>
  )
}

export default ActuellmentAssure
