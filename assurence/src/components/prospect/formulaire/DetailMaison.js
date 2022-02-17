import React, { useState } from "react";
import Button from "../../utils/Button";
import {saveMaisonDetail} from '../../../redux/actions/formsData' ;  
import {useSelector ,  useDispatch} from  'react-redux'
import DiscreteSliderMarks from "../../utils/DiscreteSliderMarks"
function DetailMaison() {
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()
var bnbr , bsurface ,bconstruction , betage= [ 0 ,25, 'Avant 1960', 0]
if (data.datailMaison){
  bnbr =  data.datailMaison.nbrpiece;
  bsurface = data.datailMaison.surface;
  betage = data.datailMaison.etage
  bconstruction =  data.construction.contruction 
  }
  let [construction ,  setConstruction]=  useState(bconstruction) 
  let [surface, setSurface]= useState(bsurface) 
  let [etage , setEtage]= useState(betage)
  let [nbrpiece, setNbrpiece] = useState(parseInt(bnbr));



const senddata = (e)=>{
    e.preventDefault() ;
    console.log(surface , etage ,  nbrpiece)
    dispatch(saveMaisonDetail({surface ,construction ,  etage ,  nbrpiece}))
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

const changenbContruction= (value) =>{
  setConstruction(construction = value)
}
  let choix= [
    { value: 0,
      label:"Avant 1960",}, {
      
    },
    {
      value: 33,
      label: 'Entre 1960 et 1980',
    },
    {
      value:66 ,
      label: 'Entre 1981 et 2000',
    },
    {
      value: 100,
      label: 'Après 2001',
    }
  ];


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
    <div className="mt-2">
      <div>
        <div>
          <p>
            Monsieur Marc est que  
            <br />
            vous pouvez nous fournir donner
            Quelques détails sur votre Maison
          </p>
        </div>
      </div>
      <main className="lg:mx-auto   pl-7 pr-7 ">
      <div class="md:mb-2 mb-0">
      <div class="flex items-center container  ">
        <DiscreteSliderMarks choix={choix}   change  = {changenbContruction}  default_value={construction}/>
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

export default DetailMaison;
