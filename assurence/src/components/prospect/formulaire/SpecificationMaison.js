import React, { useState ,  useEffect } from "react";
import Button from "../../utils/Button";
import GridMultipleOption from "../../utils/gridMultipleOption";  
import {useSelector , useDispatch} from "react-redux"
import {saveDependanceMaison} from '../../../redux/actions/formsData'
import cheminee from  '../../../assets/image_finale/cheminee.png'
import cheminee_colorer from  '../../../assets/image_finale/cheminee_colorer.png'
import veranda from  '../../../assets/image_finale/veranda.png'
import veranda_colorer from  '../../../assets/image_finale/veranda_colorer.png'
import piscine from  '../../../assets/image_finale/piscine.png'
import piscine_colorer from  '../../../assets/image_finale/piscine_colorer.png'
import  {saveProgress} from '../../../redux/actions/formsData'
var  dependance = ["Veranda" ]

function SpecificationMaison() {
  
  useEffect(() => {
     dispatch(saveProgress(55))
  }, []);

  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  let [counter, setCounter]= useState(0) 
  let [type_dependance, setChoix]= useState(dependance) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(saveDependanceMaison(type_dependance))
  }

 
  function change(e) {
    e.preventDefault();
    if (dependance.includes(e.target.id)){

      dependance = dependance.filter(dept => dept!==e.target.id);
      setCounter(counter = counter-1); 
    }
    else {
      dependance.push(e.target.id);
      setCounter(counter =  counter+1); 
    } 
    setChoix( type_dependance =  dependance)
  }
 

return (
    <div className="space-y-1">
      
      <div className="">
      <div className="mx-auto w-full md:w-800  text-center pb-2 pl-4 pr-4">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
           
            Parfait ! Vous souhaitez assurer
          </p>
        </div>
      </div>
      <div className="h-8"></div>
      <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-7  ">
            <div  id="Veranda" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Veranda"  choix={type_dependance} src={veranda} src_c={veranda_colorer}   text_option="Veranda"/>
          </div>
          <div  id="Chemin??e" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Chemin??e"  choix={type_dependance} src={cheminee} src_c={cheminee_colorer} text_option="Chemin??e"/>
          </div>
          <div  id="Piscine" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Piscine" choix={type_dependance} src={piscine} src_c={piscine_colorer} text_option="Piscine"/>
          </div>
          </div>
      </div>
  <div className="h-14"></div>
    {type_dependance  ?  <div onClick={senddata}>
    <Button Suivant="NombreSinistre" />
    </div>: 
      <div></div>
    }
    
    </div>
  );
}

export default SpecificationMaison;
