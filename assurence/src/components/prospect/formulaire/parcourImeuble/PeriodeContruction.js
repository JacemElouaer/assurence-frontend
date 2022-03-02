import React  , {useState } from 'react'
import Form_grid from  './Grid_theme/Form_grid'
import Button from '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import {save_date_construction} from '../../../../redux/actions/ImmeubleData'
import DiscreteSliderMarks from "../../../utils/DiscreteSliderMarks"

let  valuesin = {
  "Avant 1900": 0,  
  "Entre 1900 et 1950" : 33 , 
  "Entre 1951 et 2011" : 66  , 
  "Aprés 2011" :  100
}
let  choice_map = {
  0 : "Avant 1900",  
  33 :  "Entre 1900 et 1950", 
  66 :  "Entre 1951 et 2011", 
  100 :  "Aprés 2011"
}

function PeriodeContruction() {
const data   =  useSelector(state => state.ImmeubleFormReducer)
let  bdate_construction = data.date_construction ?  data.date_construction :  "" ; 

 const dispatch  =  useDispatch()
 let [periodeConst , setPeriode] = useState(bdate_construction)
 

 const changePeriode= (value) =>{
  setPeriode(periodeConst = value)
 }
   let choix= [
     { value: 0,
       label:"Avant 1900"
     },
     {
       value: 33,
       label: 'Entre 1900 et 1950'
     },
     {
       value: 66,
       label: 'Entre 1951 et 2011',
     },
     {
       value: 100,
       label: 'Aprés 2011',
     },
   ];

    const  senddata = (e)=>{
      e.preventDefault();
      dispatch(save_date_construction(periodeConst))

    }
  return (
      <div> 
    <Form_grid text="Quand l'immeuble a t-il été  construit?">
    <div class=" mb-0 w-full">
    <div class=" items-center mx-auto w-full pl-6 pr-6  md:w-700 ">
        <DiscreteSliderMarks choix={choix}   change  = {changePeriode} choice_map={choice_map} valuesin={valuesin}  default_value={periodeConst}/>
    </div> 
      
    </div><div>
     { periodeConst ? 
          <div onClick={senddata}><Button Suivant="Immeuble/InstallationImeuble" /></div>:  
          undefined
       }
    </div>
    </Form_grid> 
    
    </div>
  )
}

export default PeriodeContruction