import React  , {useState , useEffect} from 'react'
import Form_grid from  './Grid_theme/Form_grid'
import Button from '../../../utils/Button'
import DialogEmail  from  '../../../utils/DialogEmail'
import  { useDispatch , useSelector} from  'react-redux'
import {save_nbr_sinistre} from '../../../../redux/actions/ImmeubleData'


import DiscreteSliderMarks from "../../../utils/DiscreteSliderMarks"

let  valuesin = {
  "Aucun": 0,  
  "Un" : 33 , 
  "Deux" : 66  , 
  "Trois ou plus" :  1000
}
let  choice_map = {
  0 : "Aucun",  
  33 :  "Un", 
  66 :  "Deux", 
  100 :  "Trois ou plus"
}
function NombreSinistreImmeuble() {
  const  dispatch =  useDispatch()

   

 
 let [nbr_sinistre , setPeriode] = useState("Aucun")
 const changenbsinistre= (value) =>{
  setPeriode(nbr_sinistre = value) 
 }

 let choix= [
  { value: 0,
    label:"Aucun"
  },
  {
    value: 33,
    label: 'Un'
  },
  {
    value: 66,
    label: 'Deux',
  },
  {
    value: 100,
    label: 'Trois ou plus',
  },
];

const  senddata = (e)=>{
  e.preventDefault(); 
  dispatch(save_nbr_sinistre(nbr_sinistre))
  }


  return (
      <div> 
    <Form_grid text="Combien de sinistre avez-vous eu au cours des 3 dernière années ?"  >
    <div class="md:mb-1 mb-0 w-full">
      <div class=" items-center mx-auto w-full md:w-700 p-8">
        <DiscreteSliderMarks choix={choix}   change  = {changenbsinistre} choice_map={choice_map} valuesin={valuesin}  default_value={nbr_sinistre}/>
      </div> 
      
    </div><div>
     { nbr_sinistre ? 
     nbr_sinistre === "Trois ou plus" ?  
     <DialogEmail/> : 
          <div onClick={senddata}><Button Suivant="Immeuble/TypeEntreprise" /></div>:  
          undefined
       }
    </div>
    </Form_grid> 
    
    </div>
  )
}

export default NombreSinistreImmeuble