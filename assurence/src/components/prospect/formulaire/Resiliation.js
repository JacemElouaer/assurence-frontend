import React , {useState , useEffect } from "react";
import Button from "../../utils/Button";
import GridbinaryOption from "../../utils/gridbinaryOption";  
import  {useDispatch  ,  useSelector } from 'react-redux'; 
import {saveResiliation} from  "../../../redux/actions/formsData";  
import  {saveProgress} from '../../../redux/actions/formsData'

function Resiliation() { 

  useEffect(() => {
     dispatch(saveProgress(75))
  }, []);
  const data   =  useSelector(state => state.FormReducer)
  console.log(data.resiliation)



  let  bresiliation =  "oui"
  if(data.resiliation){
    bresiliation =  data.resiliation  }

  const dispatch =  useDispatch()
  let [resiliation ,  setresiliation] =  useState(bresiliation) 

 const change= (e)=> {
   
     if (e.target.id === "oui"){
      setresiliation(resiliation="oui")
    } 
    
      if(e.target.id ===  "nom"){
      setresiliation(resiliation="nom")
      }
 };
 
 const senddata=()=>{
   dispatch(saveResiliation(resiliation))

 }
  
  return (
    <div className="mt-1">
        <div>
          <p>
            Avez-vous besoin que nous résilions votre ancien contrat<br/> d'assurance pour vous ? On s'en occupe gratuitement.
          </p>
        </div>
      <main className="flex justify-center mt-16">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 grid-shape "  >
        <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={resiliation} option_text="Oui, résilier mon ancien contrat"/>
        </div>
        <div onClick={change} id="nom">
        <GridbinaryOption id="nom" type="non"  choix={resiliation} option_text="Non, pas besoin"/>
        </div>
        </div>
      </main>
      
      <div class="  mt-16  flex justify-center "  onClick={senddata}>

        {resiliation === "oui"? 
            <Button Suivant="ChangerAssurance" />: 
            <Button Suivant="EmailFormulaire" />
      }
      
      </div>
    </div>
  );
}

export default Resiliation;
