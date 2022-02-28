import React  , {useState }from 'react'
import Button  from  '../../../utils/Button'
import MultiselectDropdown  from  '../../../utils/Multiselect'
import InputTag  from  '../../../utils/InputTag'
import Form_grid from './Grid_theme/Form_grid'
import DialogEmail from  '../../../utils/DialogEmail'
import  { useDispatch , useSelector} from  'react-redux'
import {save_specification_activite} from '../../../../redux/actions/ImmeubleData'

 function ActiviteComerciale() { 

  const dispatch =  useDispatch()
let choices  = ["Hotel" ,  "Musée" ,  "Bibliotèque" ,  "Ambassade" , "Lieu de culte" ,  ""]

let  [Activite , setActivite] = useState([]) 
let  [ChoixActivite ,  setActChoix] = useState('')


const  changeActivity = (newtags)=>{ 
  setActivite(newtags)
}   
const storeAct =  (val) =>{
  setActChoix(val)
}
const  senddata = (e) =>{
  dispatch(save_specification_activite({Activite , ChoixActivite}))
}

let Activite_non_couvre = 
[
  { label:  "Aucun des activité ci-dissous", value:  "Aucun des activité ci-dissous" },
  { label:  'Toute activité du tTraité des Risques d entreprise  (TRE)', value:  'Toute activité du tTraité des Risques d entreprise  (TRE)'  },
  { label:  'Un etaablissement de nuit (bar/ discothèque/ dancing/cabaret ...)', value:  'Un etaablissement de nuit (bar, discothèque, dancing,cabaret ...)'  },
  { label:  'Hotel', value:  'Hotel'  },
  { label:  'Musée', value:  'Musée'  },
  { label:  'Bibliothèque', value:  'Bibliothèque'  },
  { label:  'Ambassade', value:  'Ambassade'  },
  { label:  'Une activité politique ou syndicale', value:  'Une activité politique ou syndicale'  },
  { label:  'Lieu de Culte', value:  'Lieu de Culte'  },
  { label:  "Brocanteur/ solderie/  Foir'fouille,dépot-vente ", value:  "Brocanteur/ solderie/Foir'fouille/dépot-vente"  },
  { label:  "Parc stationnement publique", value:  "Parc stationnement publique"  },
  { label:  "Stock de liquide inflammables (autres que pour le chauffage) en quantité supérieur à 500L,  ou 1000L pour le gaz", value:  "Stock de liquide inflammables (autres que pour le chauffage) en quantité supérieur à 500L,  ou 1000L pour le gaz"  },
  { label:  "Professionnel de l'automobile (hors carrosseries et station-service)", value:  "Professionnel de l'automobile (hors carrosseries et station-service)"  },
  { label:  "Travil mécanique du bois avec petit outillage à main", value:  "Travil mécanique du bois avec petit outillage à main"  }
]



  return (
    <Form_grid>
        <div class="w-full max-w-lg">
      <label for="name" class="leading-7 text-s text-gray-600 "><p>Quelles sont vos activités commerciale ou professionnel </p></label>
      <InputTag changeAct={changeActivity} tags={Activite}/>
      </div>
      <div class="w-full max-w-lg mt-4">
      <label for="name" class="leading-7 text-sm text-gray-600 pb-1" ><p> Verifié vos activité ne font pas partis de la liste exhaistive des activités que nous ne couvrons pas </p> </label>
      <MultiselectDropdown options={Activite_non_couvre} restoreAct={storeAct}/>
    </div>
    <div class="relative mb-4">
    </div>
   
    {Activite.length !== 0  && ChoixActivite !== "" ? 
    
      ChoixActivite.split(',').length!==1 ?
    <DialogEmail/>:  
      !ChoixActivite.includes('Aucun des activité ci-dissous')  ? 
      <DialogEmail/> : <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>
          :  undefined
      }
      </Form_grid>

  
  )
}

export default ActiviteComerciale