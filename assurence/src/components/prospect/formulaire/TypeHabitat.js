import React, { useState ,  useEffect} from "react";
import Button from "../../utils/Button";
import GridOption from "../../utils/gridOption";  
import {useSelector , useDispatch} from "react-redux"
import {saveTypeHabitat} from '../../../redux/actions/formsData'
import immeuble from  '../../../assets/images/immeuble.svg'
import apartment from  '../../../assets/images/apartment.svg'
import house from  '../../../assets/images/house.svg'
 import  {saveProgress} from '../../../redux/actions/formsData'
function Typehabitat() {

 
  useEffect(() => {
     dispatch(saveProgress(30))
  }, []);
  const data =  useSelector(state => state.FormReducer)
  const url_suivant=  'TypePropriete'
  const dispatch =  useDispatch()  

   let [type_habitat, setChoix]= useState(data.type_habitat) 

   const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(saveTypeHabitat(type_habitat))
  }

 
  useEffect(() => {
    const dbl = document.querySelector('.dblclick') 
    dbl.addEventListener('dblclick',  (e)=>{
      console.log('hello')
    })
    
  }, [])

  
 

  const change= (e)=> {
    if(e.target.id === "Appartement"){
     setChoix("Appartement")} 
     if(e.target.id ===  "Maison"){
     setChoix("Maison")} 
     if(e.target.id ===  "Immeuble"){
     setChoix("Immeuble")} 
};

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
            <div onClick={change} id="Appartement"  className="dblclick"  >
          <GridOption   id="Appartement"  choix={type_habitat } src={apartment}    text_option="Un Appartement"/>
          </div>
          <div onClick={change} id="Maison"   className="dblclick" >
          <GridOption id="Maison"  choix={type_habitat } src={house} text_option="Un Maison"/>
          </div>
          <div onClick={change} id="Immeuble"  className="dblclick">
          <GridOption id="Immeuble" choix={type_habitat } src={immeuble}   text_option="Un Immeuble"/>
          </div>
          </div>
      </div>

    {type_habitat ?  <div onClick={senddata}>
    <Button Suivant={url_suivant} />
    </div>: 
      <div></div>
    }
    
    </div>
  );
}

export default Typehabitat;
