import React  , {useState , useEffect} from 'react'
import Form_grid from  './Grid_theme/Form_grid'
import Button from '../../../utils/Button'

import DiscreteSliderMarks from "../../../utils/DiscreteSliderMarks"

let  valuesin = {
  "Avant 1900": 0,  
  "Entre 1900 et 1950" : 33 , 
  "Entre 1951 et 2011" : 66  , 
  "Apres 2011" :  1000
}
let  choice_map = {
  0 : "Avant 1900",  
  33 :  "Entre 1900 et 1950", 
  66 :  "Entre 1951 et 2011", 
  100 :  "Apres 2011"
}

function PeriodeContruction() {
    const  senddata = ()=>{

    }

   /* useEffect(() => {
      dispatch(saveProgress(65))
   }, []);*/
 
   /*const data   =  useSelector(state => state.FormReducer)
 const dispatch =  useDispatch()*/
 
 let [periodeConst , setPeriode] = useState("byvy")
 let [show ,  setShow]=  useState(false)
 

 const changenbsinistre= (value) =>{
  setPeriode(periodeConst = value)
 
   if(value==="Apres 2011"){
     setShow(true);
   }
   else {
     setShow(false);
   }
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
       label: 'Trois ou plus',
     },
   ];
    
  return (
      <div> 
    <Form_grid>
    <div class="md:mb-2 mb-0">
      <div class=" items-center mx-auto w-full p-16">
        <DiscreteSliderMarks choix={choix}   change  = {changenbsinistre} choice_map={choice_map} valuesin={valuesin}  default_value={periodeConst}/>
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