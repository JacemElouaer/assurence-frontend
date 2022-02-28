import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button from  '../../../utils/Button'
import {save_resiliation} from '../../../../redux/actions/ImmeubleData'

function BesoinResilierImmeuble() { 
  
  let  bresilier =  "oui"


  const dispatch =  useDispatch()
  let [Resilier ,  setResilier] =  useState(bresilier)  

 const change= (e)=> {
   
    if (e.target.id === "oui"){
        setResilier("oui")
    } 
    if(e.target.id ===  "non"){
        setResilier("non")
    }
 }; 
 const  senddata = (e)=>{
  e.preventDefault();
  dispatch(save_resiliation(Resilier))

 }
 
  return (
    <div>

    <Two_Option_Base text="Avez vous besoin de resilier votre ancien  contrat d'assurence immeuble pour vous ? ">
          <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={Resilier} option_text="Oui"/>
        </div>
        <div onClick={change} id="non">
        <GridbinaryOption id="non" type="non"  choix={Resilier} option_text="Non"/>
        </div>
    </Two_Option_Base>
    {Resilier ? 
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>:  
          undefined
      }

    </div>
  )
}

export default BesoinResilierImmeuble
