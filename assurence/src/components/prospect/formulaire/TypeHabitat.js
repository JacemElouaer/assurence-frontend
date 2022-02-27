import React, { useState ,  useEffect} from "react";
import Button from "../../utils/Button";
import GridOption from "../../utils/gridOption";  
import {useSelector , useDispatch} from "react-redux"
import {saveTypeHabitat} from '../../../redux/actions/formsData'
import standing from  '../../../assets/image_finale/standing.png'
import standing_colorer from  '../../../assets/image_finale/standing_colorer.png'

import maison from  '../../../assets/image_finale/maison.png'
import maison_colorer from  '../../../assets/image_finale/maison_colorer.png'
import immeuble_xxlarge from  '../../../assets/image_finale/immeuble_xxlarge.png'
import immeuble_xxlarge_colorer from  '../../../assets/image_finale/immeuble_xxlarge_colorer.png'


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
    <div className="mt-5">
      
      <div className="mx-auto w-full md:w-800  text-center ">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
            Parfait ! Vous souhaitez assurer
          </p>
        </div>
        <div className="h-8"></div>
      <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1  2xs:grid-cols-2 s:grid-cols-3 gap-4 md:gap-1  ">
            <div onClick={change} id="Appartement"  className="dblclick"  >
          <GridOption   id="Appartement"  choix={type_habitat }  src={standing} src_c={standing_colorer} text_option="Appartement"/>
          </div>
          <div onClick={change} id="Maison"   className="dblclick" >
          <GridOption id="Maison"  choix={type_habitat } src={maison} src_c={maison_colorer} text_option="Maison"/>
          </div>
          <div onClick={change} id="Immeuble"  className="dblclick">
          <GridOption id="Immeuble" choix={type_habitat } src={immeuble_xxlarge}  src_c={immeuble_xxlarge_colorer}   text_option="Immeuble"/>
          </div>
          </div>
      </div>
      <div class="h-8"></div>
    {type_habitat ? 
    type_habitat === 'Immeuble' ? 
    <div onClick={senddata}>
    <Button Suivant="Immeuble/ImmeubleGeneralinfo" />
    </div>
     :<div onClick={senddata}>
    <Button Suivant={url_suivant} />
    </div>: 
      <div></div>
    }
    
    </div>
  );
}

export default Typehabitat;
