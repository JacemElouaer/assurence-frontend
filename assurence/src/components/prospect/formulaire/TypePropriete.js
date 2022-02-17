import React , {useState  , useEffect} from "react";
import Button from "../../utils/Button";
import GridOption from "../../utils/gridOption";  
import {useSelector , useDispatch} from "react-redux"  
import {saveproprietyChoice} from '../../../redux/actions/formsData'
import contart from  '../../../assets/images/contrat.svg'
import proprietaire from '../../../assets/images/proprietaire.svg'
import propauc from  '../../../assets/images/propauc.svg';  
import  {saveProgress} from '../../../redux/actions/formsData'
function TypePropriete() { 
  
  useEffect(() => {
     dispatch(saveProgress(40))
  }, []);
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()
   let [propriety, setChoix]= useState(data.propriety) 

   const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(saveproprietyChoice(propriety))
  }


 const change= (e)=> {
     if(e.target.id === "locataire"){
       setChoix("locataire")}
    if(e.target.id ===  "proprietaire"){
      setChoix("proprietaire")} 
    if (e.target.id ===  "propietaire non occupant"){
      setChoix("propietaire non occupant")
    } 
   
 };

  
  return (
    <div className="mt-5">
      <div className="">
        <div>
          <p>
            <br />
            Etes-vous locataire ou propietaire ?
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-7 grid-shape ">
            <div onClick={change} id="locataire">
          <GridOption   id="locataire"  choix={propriety} src={contart} text_option="Un locataire"/>
          </div>
          <div onClick={change} id="proprietaire">
          <GridOption id="proprietaire"  choix={propriety}  src={proprietaire} text_option="Un proprietaire"/>
          </div>
          <div onClick={change} id="propietaire non occupant">
          <GridOption id="propietaire non occupant" choix={propriety} src={propauc}  text_option="Un propietaire non occupant"/>
          </div>
          </div>
      </div> 
      <div onClick={senddata}>
      {propriety === "propietaire non occupant" && data.type_habitat === "Appartement" ? 
      <Button Suivant="SpecificiteAppartement" />
      :  <Button Suivant="Secondaireprincipale" />
      }
    </div>
    </div>
  );
}

export default TypePropriete;
