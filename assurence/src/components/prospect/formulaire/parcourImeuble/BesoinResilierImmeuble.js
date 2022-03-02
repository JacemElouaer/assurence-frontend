import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridbinaryOption  from  "../../../utils/gridbinaryOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button from  '../../../utils/Button'
import {save_resiliation} from '../../../../redux/actions/ImmeubleData'
import {save_prospect ,  save_devis_immeuble} from  '../../../../Apis/api' 
import  {generateUID} from  '../../../../Apis/_DATA'

function BesoinResilierImmeuble() { 
const data_immeuble = useSelector((state) => state.ImmeubleFormReducer);
 const data = useSelector((state) => state.FormReducer);  
  
  


  const dispatch =  useDispatch()
  let [Resilier ,  setResilier] =  useState(data_immeuble.resiliation)  

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
  console.log("this is going to save data ") 
    console.log("this is done")
    let  nom =  data_immeuble.coordonner_client.nom 
    let prenom =  data_immeuble.coordonner_client.prenom
    let  adr  =  data.adresse.adresse 
    
    let email =  data_immeuble.coordonner_client.email
    let id  = generateUID() 
    save_prospect({ id , nom ,  prenom  ,  adresse_email: email ,adress:adr })
    save_devis_immeuble(id ,  data.adresse  , data_immeuble)
 

 }
 
  return (
    <div>

    <Two_Option_Base text="Avez-vous besoin que nous résilions pour vous  votre ancien  contrat d'assurance immeuble ? ">
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
