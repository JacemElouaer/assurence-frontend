import React ,  {useState , useEffect} from "react";
import Button from "../../utils/Button"
import {saveAdress } from '../../../redux/actions/formsData' 
import {useDispatch,  useSelector}  from  'react-redux';
import  {saveProgress} from '../../../redux/actions/formsData' 
import {Link}  from 'react-router-dom'
import EmmaBull from '../../utils/EmmaBull'


function AdresseFormulaire(props) {
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
    <div >
        <EmmaBull/>
        <div >
          <p className="text-md font-p  text-gray-500   ">
          Bonjour ! Je m’appelle Léa.
            <br />
            Je vais vous créer un devis en quelques minutes. Prêt(e) ?.
          </p>
        </div>
        <div className="form-group pl-15 container mx-auto">
          <div className="  sm:pl-10 mt-4 ">
            
          <input
            type="email"
            className="input-shape w-full  bg-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Adresse"
            onChange={(e)=>setAdresse(adresse = e.target.value)}
            value={adresse}
          />
          </div>
          <div className="sm:pl-10 mt-4 "> 
          <input
            type="email"
            className="input-shape w-full  font-weight bg-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Complement d'adresse"
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
