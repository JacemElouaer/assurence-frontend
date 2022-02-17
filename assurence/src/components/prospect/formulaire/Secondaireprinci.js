import React ,{useState , useEffect} from 'react';
import Button from  '../../utils/Button';
import {useSelector ,  useDispatch} from 'react-redux';  
import GridOption from "../../utils/gridOption";  
import {savePropSecond} from '../../../redux/actions/formsData'
import principale from  '../../../assets/images/principale.svg'
import secondaire from  '../../../assets/images/secondaire.svg'
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
      console.log(PropSecond)
    }
    if(e.target.id ===  "Secondaire") {
      setChoix("Secondaire")
      console.log(PropSecond)
    }
 };

  return( 
    <div className="mt-5">
    <div className="">
      <div>
        <h4> Hmmm j'ai un autre question</h4>
        <p className="mt-2">
          Il s'agit de votre résidence?
        </p>
      </div>
    </div>
    <main className="flex justify-center mt-5" >
      <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 grid-shape">
      <div onClick={change} id="Principale"> 
        <GridOption id="Principale" text="type_1" choix={PropSecond} src={principale} text_option="Principale"/>
        </div>
        <div onClick={change} id="Secondaire">
        <GridOption id="Secondaire" text="type_1" choix={PropSecond}  src={secondaire} text_option="Secondaire"/>
        </div>
      </div>
    </main><div onClick={senddata}>
    {type_habitat === "Appartement"? 
    
    <Button Suivant="SpecificiteAppartement"/>
    : undefined} 
    {type_habitat === "Maison"? 
    
      <Button Suivant="DetailMaison"/>
      :  undefined}  
  </div>      
</div>
)}




export default Secondaireprincipale;
