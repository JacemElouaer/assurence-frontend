import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import {save_type_entreprise} from '../../../../redux/actions/ImmeubleData'

function TypeEntreprise() { 
  const data   =  useSelector(state => state.ImmeubleFormReducer)

  const dispatch =  useDispatch()
   
  let [type_entreprise, setParking]= useState(data.type_entreprise) 
  let entreprise_list_options = [ "Un particulier " ,  "Une SCI" ,"Une ASL / une AFULL"  , "Un syndic bénévole" ,"Un syndic professionnel" ,"un membre du conseil syndical" , "Une SAS / une SARL "  ]
  const change= (e)=> {
    setParking(type_entreprise= e.target.id)
  };
   
  const senddata = (e)=>{
    e.preventDefault() ; 
    dispatch(save_type_entreprise(type_entreprise))
  }

  
   return ( 
    <div>
      <Listopptions text="Vous êtes ? ">
      {entreprise_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={type_entreprise}/></div>
      )}
       
    </Listopptions> 
    <div>
    {type_entreprise !== ""? 
          <div onClick={senddata}><Button Suivant="Immeuble/ImmeubleProspectInfo" /></div>:  undefined} 
      </div>
    </div>
  ) 
}

export default TypeEntreprise