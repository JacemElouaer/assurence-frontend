import React  ,  {useState} from 'react'
import Listopptions from  './Grid_theme/Listopptions' 
import ListitemOption from '../../../utils/listitemOption'
import Button from '../../../utils/Button'
import DialogEmail  from '../../../utils/DialogEmail'
import  { useDispatch , useSelector} from  'react-redux'
import {save_occupation} from '../../../../redux/actions/ImmeubleData'

function Occupation() { 
   const data   =  useSelector(state => state.ImmeubleFormReducer)
   let bOcupation =  data.occupation ? data.occupation :  ""
  const  dispatch = useDispatch()
   
  let occupation_list_options = ["Occupé pour plus de 75% de sa surface " ,  "Occupé entre 50% et 75% de sa surface " , 
   "Occupé pour moins de 50% de sa surface" , "Non, inoccupé et/ou arreté de péril "]
   
      let [OcupationCh, setOccupation]= useState(bOcupation) 

   
     const change= (e)=> {
    setOccupation(OcupationCh= e.target.id)
   };
   const senddata = (e) =>{
      e.preventDefault();
      dispatch(save_occupation(OcupationCh))
   }
   
   

  return ( 
    <div>
      <Listopptions text=" L'immeuble est t'il .. ? ">
      {occupation_list_options.map((option)=>
         <div id={option} onClick={change}><ListitemOption text_option={option} id={option} choix={OcupationCh}/></div>
      )}
    </Listopptions>
    { OcupationCh ? 
         OcupationCh=== occupation_list_options[2] || Occupation=== occupation_list_options[3] ? 
           <DialogEmail/> :  
          <div onClick={senddata}><Button Suivant="Immeuble/PourcentagePropreitaire" /></div>:   
          undefined
       }
    </div>
  ) 
}

export default Occupation