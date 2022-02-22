import React, { useState, useEffect } from "react";
import Button from "../../utils/Button";
import {
  saveProgress,
  saveProspectInfo,
  saveProspect
} from "../../../redux/actions/formsData"; 
import {save_prospect ,  save_devis} from  '../../../Apis/api' 
import  {generateUID} from  '../../../Apis/_DATA'
import { useDispatch, useSelector } from "react-redux";
function EmailFormulaire() {
  const data = useSelector((state) => state.FormReducer);

  let bemail = data.prospect ? data.prospect.Email : "";
  let bbirthdate = data.prospect ? data.prospect.birthdate: "";
  let adresse =  data.adresse ; 
  let Generalinfo  =  data.generalinfo
  let [Email, setEmail] = useState(bemail);
  let [birthdate, setBirthdate] = useState(bbirthdate); 
  


  const handleChange = (e) => { 
    setEmail(e.target.value);
  };
  const handleChangeBirth = (e) => {
    setBirthdate(e.target.value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveProgress(100));
  }, []);




  const senddata = (e) => {
    console.log("this is going to save data ") 
    dispatch(saveProspect(Email,   birthdate)); 
    console.log("this is done")
    let  nom =  Generalinfo.nom 
    let prenom =  Generalinfo.prenom
    let  adr  =  adresse.adresse 
    let id  = generateUID() 
    save_prospect({ id , nom ,  prenom  ,  adresse_email: Email ,adress:adr })
    save_devis(id ,  data)
  };



  return (
    <div className="space-y-5">
      <div class="">
        <div class="container">
          <p className="text-md font-p  text-gray-500  lg:800 ">
            Bonjour ! Je m’appelle Léa.
            <br />
            Je vais vous créer un devis en quelques minutes. Prêt(e) ?.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="grid grid-cols-1    gap-4 w-full  ">
          <div className="sm:pl-10 mt-4 ">
            <label for="exampleInputEmail1 pl--" className="">
              <p className="font-p  md:text-md text-sm ">
                Quelle est votre email ?
              </p>
            </label>
            <input
              type="email"
              className="input-shape w-full"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Adresse"
              onChange={handleChange}
              value={Email}
            />
          </div>
          <div className=" sm:pl-10 mt-4 ">
            <label for="exampleInputEmail1 " className="">
              <p className="font-p  md:text-md text-sm ">
                Quelle est votre adresse ?
              </p>
            </label>
            <input
              type="date"
              id="start"
              name="trip-start"
              className="input-shape w-full"
              placeholder="dd-mm-yyyy"
              min="1930-01-01"
              max="2002-12-31"
              onChange={handleChangeBirth}
              style={{
                fontFamily: "sans ,  arial ,  sans-serif",
                color: "#444",
              }}
            />
          </div>
        </div>
      </div>

      {Email && birthdate ? (
        <div  onClick={senddata} role="button">
          <Button Suivant="" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default EmailFormulaire;
