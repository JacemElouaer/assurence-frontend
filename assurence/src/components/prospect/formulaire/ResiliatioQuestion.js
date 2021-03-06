import React , {useState} from "react";
import Button from "../../utils/Button";
import GridbinaryOption from "../../utils/gridbinaryOption";  
import  {useDispatch  ,  useSelector } from 'react-redux'; 
import {saveResiliation} from  "../../../redux/actions/formsData";
function Resiliation() { 
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
         <div className="mx-auto w-full md:w-800  text-center pb-2">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
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
      
      <div class="mt-16"  onClick={senddata}>

        {resiliation ==="oui"? 
            <Button Suivant="Dependance" />: 
            <Button Suivant="Dependance" />
      }
      
      </div>
    </div>
  );
}

export default Resiliation;
