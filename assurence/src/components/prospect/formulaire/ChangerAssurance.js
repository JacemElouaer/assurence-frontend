import React , {useState ,  useEffect} from "react";
import Button from "../../utils/Button";
import GridbinaryOption from "../../utils/gridbinaryOption";  
import {useDispatch , useSelector } from  'react-redux';
import  {saveProgress} from '../../../redux/actions/formsData'
import  {saveBesoinRes} from '../../../redux/actions/formsData'
import GreenAlert from "../../utils/GreenAlert"; 

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
         <div className="mx-auto w-full md:w-800  text-center pb-4">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full mb-8">
            Avez-vous besoin que nous résilions votre ancien contrat<br/> 
          </p>
          <p className="text-xl xs:text-2xl md:text-3xl text-[#444]  text-center  font-sans lg:w-full mt-2">
            d'assurance pour vous ? On s'en occupe gratuitement.</p>
        </div>
      <main className="flex justify-center mt-8">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5"  >
        <div onClick={change} id="demenage"> 
        <GridbinaryOption id="demenage" type="oui" text="type_1" choix={besoinres} option_text="Je déménage"/>
        </div>
        <div onClick={change} id="change">
        <GridbinaryOption id="change" type="non" text="type_1" choix={besoinres} option_text= "Je veux changer pour HABITAT" />
        </div>
        </div>
      </main>
      <div class="h-16"></div>
      {besoinres==="demenage"?
      
       <GreenAlert header="Si vous déménagez"
       body=" nous vous demanderons toutes les informations pour
        résilier votre ancienne assurance après avoir souscrit
         votre contrat HABITAT."/>:
  undefined
    
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
