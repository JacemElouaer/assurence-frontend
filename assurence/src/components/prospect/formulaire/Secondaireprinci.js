import React ,{useState , useEffect} from 'react';
import Button from  '../../utils/Button';
import {useSelector ,  useDispatch} from 'react-redux';  
import GridOption from "../../utils/gridOption";  
import {savePropSecond} from '../../../redux/actions/formsData'
import holiday from  '../../../assets/image_finale/holiday.png'
import holiday_colorer from  '../../../assets/image_finale/holiday_colorer.png'
import principale from  '../../../assets/image_finale/principale.png'
import principale_colorer from  '../../../assets/image_finale/principale_colorer.png'
import  {saveProgress} from '../../../redux/actions/formsData'

function Secondaireprincipale() {
  
  useEffect(() => {
     dispatch(saveProgress(45))
  }, []);

  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch() 
  let [PropSecond ,  setChoix] =  useState(data.PropSecond)  
  let [type_habitat, setHabitat]= useState(data.type_habitat)

   const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(savePropSecond(PropSecond))
  }

 const change= (e)=> {
    if (e.target.id === 'Principale'){
      setChoix("Principale") 
    }
    if(e.target.id ===  "Secondaire") {
      setChoix("Secondaire")
    }
 };

  return( 
    <div className="mt-5">
    <div className="">
    <div className="mx-auto w-full md:w-800  text-center pb-2">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
         Hmmm j'ai un autre question
          <br/>
          Il s'agit de votre résidence?
        </p>
      </div>
    </div>
    <div className="h-8"></div>
    <main className="flex justify-center" >
      <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 ">
      <div onClick={change} id="Principale"> 
        <GridOption id="Principale" text="type_1" choix={PropSecond} src={principale} src_c={principale_colorer} text_option="Principale"/>
        </div>
        <div onClick={change} id="Secondaire">
        <GridOption id="Secondaire" text="type_1" choix={PropSecond}  src={holiday}  src_c={holiday_colorer} text_option="Secondaire"/>
        </div>
      </div>
    </main>
    
    <div class="h-8"></div>
    <div onClick={senddata}>
      {PropSecond ? <div>

{type_habitat === "Appartement"? 
    
    <Button Suivant="SpecificiteAppartement"/>
    : undefined} 
    {type_habitat === "Maison"? 
    
      <Button Suivant="DetailMaison"/>
      :  undefined}  

      </div> :  undefined}
    
  </div>      
</div>
)}




export default Secondaireprincipale;
