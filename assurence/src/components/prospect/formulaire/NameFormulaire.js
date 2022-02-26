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
      <div className="mx-auto w-full md:w-800  text-center pb-2">
        
          <p className="text-xl xs:text-3xl md:text-4xl text-[#444]  text-center  font-sans lg:w-full mb-1">
          Bonjour ! Je m’appelle Léa.
          </p>
            <br />
            <br />
            <p className="text-xl xs:text-3xl md:text-3xl text-[#444]  text-center  font-sans lg:w-full mb-10">
            Je vais vous créer un devis en quelques minutes. Prêt(e)  ?
          </p>
      </div>
      <div className="mb-5 sm:mb-5 mt-2  mx-auto">
        <div className="justify-center ">
          <div className="container     place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2   w-full sm:w-3/4 bg-black">
            <div className="container  w-full sm:w-3/4  ">
              <input
                type="text"
                className="form-control input-shape mb-2"
                id="inputPassword4"
                placeholder="Prénom"
                value={prenom}
                onChange={(e)=>setPrenom(e.target.value)}

              />
            </div>
            <div className=" container  w-full  sm:w-3/4" >
              <input
                type="Nom"
                className="input-shape "
                id="inputEmail4"
                placeholder="Nom"
                value={nom}
                onChange={(e)=>setNom(e.target.value)}
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
