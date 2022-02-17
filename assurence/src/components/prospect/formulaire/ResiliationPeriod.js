import React , {useState , useEffect} from "react";
import Button from "../../utils/Button";
import BinaryOption from  '../../utils/binaryOption'
import SelectLabels from '../../utils/SelectLabels'
import  {saveProgress} from '../../../redux/actions/formsData'
import {useDispatch} from  'react-redux'

function ResiliationPeriod() { 
  const dispatch =  useDispatch()
  
  useEffect(() => {
     dispatch(saveProgress(95))
  }, []);
  let [choix ,  setChoix] =  useState("option_1") 

 const change= (e)=> {
     if (e.target.id === "option_1"){
      setChoix(choix="option_1")
    } 
    
      if(e.target.id ===  "option_2"){
      setChoix(choix="option_2")
      }
      console.log(choix);
 };
 function  changeResdate(){
   
 }
 function  changeM(){

 }
  
  return (
    <div className="mt-1">
      <div className="">
        <div>
          <p>
            <br />
            Nous avons besoin de savoir depuis quand vous étiez assuré pour ce bien<br/> afin de définir une date de début à votre contrat. 
          </p>
        </div>
      </div>
      <main className="flex justify-center mt-16">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 grid-shape"  >
        <div onClick={change} id="option_1"> 
        <BinaryOption id="option_1" type="oui" text="type_1" choix={choix} option_text="Moin de 12 mois"/>
        </div>
        <div onClick={change} id="option_2">
        <BinaryOption id="option_2" type="non" text="type_1" choix={choix} option_text= "Plus de 12 mois" />
        </div>
        </div>
      </main>
      {choix==="option_1"?
       <div className="mt-8"> 
 
       <div className="flex  justify-center mx-auto  mt-5">     
       <SelectLabels chnageMois={changeM} setResDate = {changeResdate} /></div>
       <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
       
       
       <p>Parfait! La date d’effet de votre contrat sera fixée au 8 avril 2022 pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div>
           
       </div>
       :  <div class="shadow_box mt-8 text-16 text-default-grey-400 font-sans w-600" >
       <p>Parfait! La date d’effet de votre contrat sera fixée au 8 avril 2022 pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div>
    }
      <div class="mt-16">
      
      <Button Suivant="EmailFormulaire" />
      </div>
    </div>
  );
}

export default ResiliationPeriod;
