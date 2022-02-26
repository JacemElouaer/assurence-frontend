import React , {useState  , useEffect} from "react";
import Button from "../../utils/Button";
import GridOption from "../../utils/gridOption";  
import {useSelector , useDispatch} from "react-redux"  
import {saveproprietyChoice} from '../../../redux/actions/formsData'
import contart from  '../../../assets/images/contrat.svg'
import proprietaire from '../../../assets/images/proprietaire.svg'
import propauc from  '../../../assets/images/propauc.svg';  
import key from  '../../../assets/image_finale/key.png'
import key_colorer from  '../../../assets/image_finale/key_colorer.png'
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
      <div className="mx-auto w-full md:w-600  text-center pb-5">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full  ">
            Etes-vous locataire ou propietaire ?
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-7  ">
            <div onClick={change} id="locataire">
          <GridOption   id="locataire"  choix={propriety} src={contart} text_option="Locataire"/>
          </div>
          <div onClick={change} id="proprietaire">
          <GridOption id="proprietaire"  choix={propriety}  src={key} src_c={key_colorer} text_option="Proprietaire"/>
          </div>
          <div onClick={change} id="propietaire non occupant">
          <GridOption id="propietaire non occupant" choix={propriety} src={propauc}  text_option="Propietaire non occupant"/>
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
