import React, { useState, useEffect } from "react";
import Button from "../../utils/Button";
import {
  saveProgress,
  saveProspectInfo,
} from "../../../redux/actions/formsData";
import { useDispatch, useSelector } from "react-redux";
function EmailFormulaire() {
  const data = useSelector((state) => state.FormReducer);

  let bemail = data.prospectInfo ? data.prospectInfo.Email : "";
  let bbirthdate = data.prospectInfo ? data.prospectInfo.birthdate: "";

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
    e.preventDefault();
    dispatch(saveProspectInfo({ Email, birthdate }));
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
              onChange={(e) => handleChange}
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

      {true ? (
        <div className="" onClick={senddata} role="button">
          <Button Suivant="Typehabitat" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default EmailFormulaire;
