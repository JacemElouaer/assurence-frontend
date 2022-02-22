import React, { useState ,  useEffect } from "react";
import Button from "../../utils/Button";
import GridMultipleOption from "../../utils/gridMultipleOption";  
import {useSelector , useDispatch} from "react-redux"
import {saveDependanceMaison} from '../../../redux/actions/formsData'
import apartment from  '../../../assets/images/apartment.svg'
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
    <div className="space-y-5">
      
      <div className="">
        <div className='container'>
          <p>
            Parfait ! Vous souhaitez assurer
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-7 grid-shape ">
            <div  id="Veranda" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Veranda"  choix={type_dependance} src={apartment}    text_option="Un Veranda"/>
          </div>
          <div  id="Cheminée" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Cheminée"  choix={type_dependance} src={apartment} text_option="Un Cheminée"/>
          </div>
          <div  id="Piscine" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Piscine" choix={type_dependance} src={apartment}  text_option="Un Piscine"/>
          </div>
          </div>
      </div>

    {type_dependance  ?  <div onClick={senddata}>
    <Button Suivant="NombreSinistre" />
    </div>: 
      <div></div>
    }
    
    </div>
  );
}

export default SpecificationMaison;
