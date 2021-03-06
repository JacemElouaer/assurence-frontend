import React , {useState ,  useEffect} from 'react'
import Button from "../../utils/Button";
import DiscreteSliderMarks from "../../utils/DiscreteSliderMarks"
import {useDispatch ,  useSelector}  from 'react-redux'; 
import  {savenombresinistre}  from '../../../redux/actions/formsData'
import  {saveProgress} from '../../../redux/actions/formsData'
import GreenAlert from '../../utils/GreenAlert'

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


function NombreSinistre() {
  
  useEffect(() => {
     dispatch(saveProgress(65))
  }, []);

  const data   =  useSelector(state => state.FormReducer)
const dispatch =  useDispatch()

let [sinistre ,  setSinistre]=  useState(data.nbrsinistre)
let [show ,  setShow]=  useState(false)

const  senddata= (e)=>{
  e.preventDefault();
  dispatch(savenombresinistre(sinistre))
}
const changenbsinistre= (value) =>{
  setSinistre(sinistre = value)

  if(value==="Trois ou plus"){
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
    <div class="mx-auto  md:w-700 w-full  px-5 md:px-0  ">
    <div class="flex justify-center Axiforma-Regular text-13-18 lg:text-16-22 text-dark-blue-600 text-center lg:mt-2.5 mb-5 lg:mb-10">
    <div className="mx-auto w-full md:w-800  text-center ">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
      Combien de sinistres avez-vous eu au cours des 3 dernières années ?</p>
      </div>
    </div>
   <div className="h-6"> </div>
    <div class="md:mb-2 mb-0">
      <div class=" items-center mx-auto w-full pl-6 pr-6">
        <DiscreteSliderMarks choix={choix}   change  = {changenbsinistre} choice_map={choice_map} valuesin={valuesin}  default_value={sinistre}/>
      </div> 
    </div>
    <div className="h-6"> </div>
{!show ?  
<div className="" role="button" id ="btn" onClick={senddata}>
<Button Suivant="Resiliation"/>
</div> : <div class="mt-5" >
<GreenAlert header="Si vous déménagez" body="nous vous demanderons toutes les informations
 pour résilier votre ancienne assurance 
après avoir souscrit votre contrat HABITAT"/>
  
</div>
}

</div>
 )
}

export default NombreSinistre