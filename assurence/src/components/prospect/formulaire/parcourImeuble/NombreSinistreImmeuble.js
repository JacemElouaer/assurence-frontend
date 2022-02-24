import React  , {useState , useEffect} from 'react'
import Form_grid from  './Grid_theme/Form_grid'
import Button from '../../../utils/Button'

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
    
  return (
      <div> 
    <Form_grid>
    <div class="md:mb-2 mb-0">
      <div class=" items-center mx-auto w-full p-16">
        <DiscreteSliderMarks choix={choix}   change  = {changenbsinistre} choice_map={choice_map} valuesin={valuesin}  default_value={periodeConst}/>
      </div> 
      
    </div><div>
     { periodeConst ? 
          <div onClick={senddata}><Button Suivant="Immeuble/TypeEntreprise" /></div>:  
          undefined
       }
    </div>
    </Form_grid> 
    
    </div>
  )
}

export default NombreSinistreImmeuble