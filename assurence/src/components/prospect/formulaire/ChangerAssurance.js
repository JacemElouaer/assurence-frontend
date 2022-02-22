import React , {useState ,  useEffect} from "react";
import Button from "../../utils/Button";
import GridbinaryOption from "../../utils/gridbinaryOption";  
import {useDispatch , useSelector } from  'react-redux';
import  {saveProgress} from '../../../redux/actions/formsData'
import  {saveBesoinRes} from '../../../redux/actions/formsData' 
function ChangerAssurance() { 

let data =  useSelector(state => state.FormReducer)
let  dispatch =  useDispatch()

let  bbesoinres  = data.besoinres ?  data.besoinres :""

let [besoinres ,  setChoix] =  useState(bbesoinres) 
  useEffect(() => {
     dispatch(saveProgress(85))
  }, []);
 const change= (e)=> { 
     if (e.target.id === "demenage"){
      setChoix(besoinres="demenage")
    } 
    
      if(e.target.id ===  "change"){
      setChoix(besoinres="change")
      }
 };

  function  senddata(e){
    e.preventDefault() ;
    dispatch(saveBesoinRes(besoinres)) ; 
  } 
  
  
  return (
    <div className="mt-1">
        <div>
          <p>
            Avez-vous besoin que nous résilions votre ancien contrat<br/> d'assurance pour vous ? On s'en occupe gratuitement.
          </p>
        </div>
      <main className="flex justify-center mt-16">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 grid-shape"  >
        <div onClick={change} id="demenage"> 
        <GridbinaryOption id="demenage" type="oui" text="type_1" choix={besoinres} option_text="Je déménage"/>
        </div>
        <div onClick={change} id="change">
        <GridbinaryOption id="change" type="non" text="type_1" choix={besoinres} option_text= "Je veux changer pour HABITAT" />
        </div>
        </div>
      </main>
      {besoinres==="demenage"?
      <div class="shadow_box mt-8 text-16 text-default-grey-400 font-sans w-600" >
        <p>Si vous déménagez, nous vous demanderons toutes les informations pour résilier votre ancienne assurance après avoir souscrit votre contrat HABITAT</p>

      </div> :
    <div> </div>
    
    }
      <div class="mt-16" onClick={senddata}>
        {  besoinres ===  "demenage" ? 
         <Button Suivant="EmailFormulaire"/> :  
         <Button Suivant="ResiliationPeriod" />}
      
      </div>
    </div>
  );
}

export default ChangerAssurance;
