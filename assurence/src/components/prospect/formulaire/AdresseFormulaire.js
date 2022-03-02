import React ,  {useState , useEffect} from "react";
import Button from "../../utils/Button"
import {saveAdress } from '../../../redux/actions/formsData' 
import {useDispatch,  useSelector}  from  'react-redux';
import  {saveProgress} from '../../../redux/actions/formsData' 
import EmmaBull from '../../utils/EmmaBull'


function AdresseFormulaire() {
  const dispatch =  useDispatch() 
  
  useEffect(() => {
     dispatch(saveProgress(15))
  }, []);

  

  const data   =  useSelector(state => state.FormReducer)
  let badresse = data.adresse ? data.adresse.adresse : "";
  let bcomplement =  data.complement ? data.adresse.complement :"";
  
  let  [adresse ,  setAdresse] = useState(badresse); 
  let  [Complement  , setComplement] =  useState(bcomplement)
  function  senddata(e){
    e.preventDefault() ;
    dispatch(saveAdress({adresse, Complement})) ; 
  } 
  

  return (
    <div className=  "">
      <div className="mx-auto w-full md:w-800  text-center pb-2">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
          Salut  {data.generalinfo.prenom } !</p>
            <br/>
            <br/>
            <p className="text-xl xs:text-2xl md:text-3xl text-[#444]  text-center  font-sans lg:w-full ">
            Pouvez-vous me donner votre l'adresse de votre habitat ?</p>
          
        </div>
        <div className="form-group container  place-items-center mx-auto grid grid-cols-1 md:grid-cols-8   w-full md:w-6/7 mt-16">
          <div className= " md:col-span-5 sm:pl-10 w-full mb-2"> 
          <input
            type="email"
            className="input-shape   bg-white w-full "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Adresse"
            onChange={(e)=>setAdresse(adresse = e.target.value)}
            value={adresse}
          />
          </div>
          <div className="sm:pl-10 col-span-3 w-full mb-2"> 
          <input
            type="email"
            className="input-shape w-full  font-weight bg-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Complément d'adresse"
            onChange={(e)=>setComplement(Complement = e.target.value)}
            value={Complement}
          />
          </div> 
          
        { /* <Link to={}><a className=" text-gray-500  underline hover:text-sky-700  hover:decoration-sky-500 text-sm pl-16 pt-1  " href={{}}>  Add Adresse </a>
          </Link>*/
        }
          
          
        
        </div>
        {adresse ?  
        <div className="mt-4" onClick={senddata} role="button">
          <Button Suivant="Typehabitat"  />
        </div> :
    <div>

    </div> }
      
    </div>
  );
}

export default AdresseFormulaire;
