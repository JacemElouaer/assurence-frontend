import React ,  {useState ,  useEffect} from "react";
import Button from "../../utils/Button"
import {useDispatch,  useSelector}  from  'react-redux';
import {saveGenaralInfo } from '../../../redux/actions/formsData'
import {saveProgress } from '../../../redux/actions/formsData' 
import EmmaBull from '../../utils/EmmaBull'
function NameFormulaire() {
  const data   =  useSelector(state => state.FormReducer)
  let bnom = data.generalinfo ? data.generalinfo.nom : "";
  let bprenon =  data.generalinfo ? data.generalinfo.prenom :"";
  

  useEffect(() => {
    dispatch(saveProgress(7.5))
 }, []);


  const dispatch =  useDispatch() 
  let  [nom ,  setNom] = useState(bnom); 
  let  [prenom  , setPrenom] =  useState(bprenon) 

  function  senddata(e){
    e.preventDefault() ;
    dispatch(saveGenaralInfo({nom, prenom})) ; 
  } 
  return (
    <div className=  "">
      <EmmaBull/>
      <div className="">
          <p className="text-md font-p  text-gray-500  lg:w-full ">
          Enchantée, Marc !
            <br />
            Quelle est l'adresse du bien à assurer ?
          </p>
      </div>
      <div className="mb-5 sm:mb-5 mt-2  mx-auto">
        <div className="justify-center ">
          <div className="container   grid grid-cols-1 sm:grid-cols-2  gap-1 w-full">
            <div className="container  w-full">
              <input
                type="Nom"
                className="input-shape w-full"
                id="inputEmail4"
                placeholder="Nom"
                value={nom}
                onChange={(e)=>setNom(e.target.value)}
              />
            </div>
            <div className=" container  w-full" >
              <input
                type="text"
                className="form-control input-shape w-full"
                id="inputPassword4"
                placeholder="Prénpm"
                value={prenom}
                onChange={(e)=>setPrenom(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-5"> 
      {nom !=="" && prenom !==""? 
            <div className="flex justify-center w-full" onClick={senddata}>
               <Button Suivant="Adresse" />
            </div>
            :
            <div></div> }
          </div>
    </div>
  );
}

export default NameFormulaire;
