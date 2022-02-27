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



  let  bresiliation =  "oui"
  if(data.resiliation !=="") {
    bresiliation =  data.resiliation ===false ?  "non"  :  "oui" 
   }

  const dispatch =  useDispatch()
  let [resiliation ,  setresiliation] =  useState(bresiliation)  

 const change= (e)=> {
   
     if (e.target.id === "oui"){
      setresiliation("oui")
    } 
    
      if(e.target.id ===  "non"){
      setresiliation("non")
      }
 };
 
 const senddata=()=>{ 
   let  resilier = resiliation ==="oui"?  true :  false 
   
   dispatch(saveResiliation(resilier))

 }
  
  return (
    <div className="mt-1">
        <div className="mx-auto w-full md:w-800  text-center pb-2">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
          Combien de sinistres avez-vous eu au cours des 3 dernières années ?
          </p>
        </div>
      <main className="flex justify-center mt-16">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5  "  >
        <div onClick={change} id="oui"> 
        <GridbinaryOption id="oui" type="oui"  choix={resiliation} option_text="Oui, résilier mon ancien contrat"/>
        </div>
        <div onClick={change} id="non">
        <GridbinaryOption id="non" type="non"  choix={resiliation} option_text="Non, pas besoin"/>
        </div>
        </div>
      </main>
      
      <div className="  mt-2  flex justify-center "  onClick={senddata}>

        {resiliation ? 
            <Button Suivant="ChangerAssurance" />: 
            <Button Suivant="EmailFormulaire" />
      }
      
      </div>
    </div>
  );
}

export default Resiliation;
