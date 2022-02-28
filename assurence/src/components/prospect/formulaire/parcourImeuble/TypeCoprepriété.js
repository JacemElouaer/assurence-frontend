import React  ,  {useState } from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridOption  from  "../../../utils/gridOption" 
import Button  from "../../../utils/Button";
import  { useDispatch , useSelector} from  'react-redux'
import {save_copropriete} from '../../../../redux/actions/ImmeubleData'

   
function TypeCoprepriété() {
    const dispatch =useDispatch()
    let [nature_immeuble ,  setType] =  useState("")
    const change= (e)=> {
        setType(e.target.id)
    }; 
    const  senddata =(e)=>{
      e.preventDefault(); 
      dispatch(save_copropriete(nature_immeuble))
    }
  return (
    <div>
    <Two_Option_Base text="Alors ,  votre immeuble est considerer comme  ?  ">
         <div onClick={change} id="verticale">
          <GridOption   id="verticale"  choix={nature_immeuble } src={"null"}    text_option="Copropriété verticale"/>
          </div>
          <div onClick={change} id="horizontale" >
          <GridOption id="horizontale"  choix={nature_immeuble } src={"null"} text_option="Copropriété horizontale"/>
          </div>          
    </Two_Option_Base>
    <div>
    {nature_immeuble !=="" ? 
          <div onClick={senddata}><Button Suivant="Immeuble/TypeImmeuble" /></div>: 
          undefined } 
      </div>
  </div>
  )
}

export default TypeCoprepriété