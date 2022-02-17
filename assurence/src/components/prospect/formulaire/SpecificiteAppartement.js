import React, { useState , useEffect } from "react";
import Button from "../../utils/Button";
import GridOption from "../../utils/gridOption";
import {saveAppartSpecification} from '../../../redux/actions/formsData' ;  
import {useSelector ,  useDispatch} from  'react-redux'
import rezdechausse from  '../../../assets/images/rezdechausse.svg'
import intermediareapart from  '../../../assets/images/intermediareapart.svg'
import  {saveProgress} from '../../../redux/actions/formsData' 
import roof from  '../../../assets/images/roof.svg'
function SpecificiteAppartement() {
  
  useEffect(() => {
     dispatch(saveProgress(50))
  }, []);

  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()
var bnbr  =  0 
var bsurface  =  25
var betage = undefined
if (data.appartspecification){
  bnbr =  data.appartspecification.nbrpiece;
  bsurface = data.appartspecification.surface;
  betage = data.appartspecification.etage
  }
  
  let [surface, setSurface]= useState(bsurface) 
  let [etage , setEtage]= useState(betage)
  let [nbrpiece, setNbrpiece] = useState(parseInt(bnbr));



const senddata = (e)=>{
    e.preventDefault() ;
    console.log(surface , etage ,  nbrpiece)
    dispatch(saveAppartSpecification({surface , etage ,  nbrpiece}))
  }
const change= (e)=> {
    if (e.target.id === "rez-de-chaussée"){
     setEtage("rez-de-chaussée")
     }
     if(e.target.id === "Intermédiaire"){
     setEtage("Intermédiaire")
    } 
     if(e.target.id === "Dernier")
     {setEtage("Dernier")
    } 
}

const increment=(e)=>{
  e.preventDefault() ;
  
  document.getElementById('dicrement').disabled = false;
  if (nbrpiece === 24) {
    document.getElementById(e.target.id).disabled = true ;
  }
  setNbrpiece(nbrpiece = nbrpiece+1)
}
const dicrement=(e)=>{
  e.preventDefault() ;
  document.getElementById('increment').disabled = false;
  if (nbrpiece === 0) {
    document.getElementById('dicrement').disabled = true ;
  }
  else{
    document.getElementById("dicrement").disabled = false ;
    setNbrpiece(nbrpiece=nbrpiece-1)
  }
  
}



const afterhandle= (e) =>{
  e.preventDefault(); 
  if(e.target.value<25) {
    e.target.value =  25
    setSurface(surface = 25)
  }
  if(e.target.value>250){
    console.log("going")
    e.target.value =  250
    setSurface(surface = 250)
    
  }
  setSurface(e.target.value) 

}
const changeSurface = (e)=>{
    e.preventDefault();
    setSurface(e.target.value);
  }


  return (
    <div className="mt-5">
      <div>
        <div>
          <p>
            Monsieur Marc est que  
            <br />
            vous pouvez nous fournir donner
            Quelques détails sur votre appartement
          </p>
        </div>
      </div>
      <main className="lg:mx-auto   pl-7 pr-7 ">
        <div className="grid grid-cols-1  2xs:grid-cols-2  s:grid-cols-3 gap-2 mt-5 grid-shape ">
        <div onClick={change} id="rez-de-chaussée">
          <GridOption   id="rez-de-chaussée"  choix={etage }  src={rezdechausse} text_option="Rez-de-chaussée" />
          </div>
          <div onClick={change} id="Intermédiaire">
          <GridOption id="Intermédiaire"  choix={etage } src={intermediareapart} text_option="Intermédiaire" />
          </div>
          <div onClick={change} id="Dernier">
          <GridOption id="Dernier" choix={etage } src={roof}  text_option="Dernier"  />
          </div>
        </div>
      </main> 
      <div className="flex flex-col items-center mt-5">
      <label
          for="housing_rooms"
          className="mb-2.5" >
        
          Surface de l'habitat
        </label>
         <div className="flex space-x-1 font-mono text-center ">
          
          <input
            type="text" maxLength="4" pattern="\d*" max="10" min="1"
             className="flex justify-center pl-16 w-50 h-12 rounded-md border border-default-grey-200 input-shape  bg-white OpenSans-16 text-acheel-blue-400 focus:outline-none"
             placeholder="25"  onBlur={afterhandle}  onChange={changeSurface} value={surface}  />
  
        </div> 
        <label
          for="housing_rooms"
          className=" mb-2.5 mt-2" >
          Nombre de pièces
        </label>
        
       
        <div className="flex space-x-6 text-center">
          <button id = "dicrement" onClick={dicrement} style={{backgroundColor:'#00a898'}} className="flex justify-center transition     hover:duration-500 ease-in-out  items-center w-12 h-12 rounded-md  focus:outline-none">
            -
          </button>
          <input  value={nbrpiece}  placeholder="0"
            class="flex justify-center items-center text-center input-shape w-16 h-12   bg-white OpenSans-16 text-acheel-blue-400 focus:outline-none"
          />
          <button  id = "increment" onClick={increment} style={{backgroundColor:'#00a898'}} className="flex justify-center transition     hover:duration-500 ease-in-out  items-center w-12 h-12 rounded-md  focus:outline-none">
            +
          </button>
      
           
                </div>
                {etage ? 
                <div className="mt-5 mr-5" onClick={senddata}>
            <Button Suivant="Dependance" />
                </div> :
          <div>
              
          </div> }
      
      </div>
      
    </div>
  );
}

export default SpecificiteAppartement;
