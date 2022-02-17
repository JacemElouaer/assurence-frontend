import React, { useState, useEffect } from "react";
import AdresseFormulaire from "./AdresseFormulaire";
import NameFormulaire from "./NameFormulaire";
import SpecificiteAppartement from "./SpecificiteAppartement";
import SurfaceHabitat from "./SurfaceHabitat";
import TypePropriete from "./TypePropriete";
import "../../../styles/forms/style.css";
import Secondaireprincipale from "./Secondaireprinci";
import TypeHabitat from "./TypeHabitat";
import Dependance from "./dependance";
import Resiliation from "./Resiliation";
import ChangerAssurance from "./ChangerAssurance";
import ResiliationPeriod from "./ResiliationPeriod";
import NombreSinistre from "./NombreSinistre";
import EmailFormulaire from "./EmailFormulaire";
import ComplementAdresse from "./ComplementAdresse";
import SpecificationMaison from "./SpecificationMaison";
import DetailMaison from "./DetailMaison";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../utils/Navbar";

const FormulaireIndex = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className=" flex flex-row justify-between justify-content  mx-auto  ">
          <div className="w-full h-full">
            <div className="flex flex-col items-center justify-center py-14  ">
              <div className="flex flex-col px-5 md:px-0  pt-72px md:pt-28">
                <div className="flex justify-center mx-auto ">
                  <Routes>
                    <Route
                      path="Adresse"
                      element={<AdresseFormulaire />}
                    ></Route>
                    <Route path="Name" element={<NameFormulaire />}></Route>
                    <Route
                      path="SpecificiteAppartement"
                      element={<SpecificiteAppartement />}
                    ></Route>
                    <Route
                      path="SurfaceHabitat"
                      element={<SurfaceHabitat />}
                    ></Route>
                    <Route
                      path="TypePropriete"
                      element={<TypePropriete />}
                    ></Route>
                    <Route
                      path="Secondaireprincipale"
                      element={<Secondaireprincipale />}
                    ></Route>

                    <Route path="TypeHabitat" element={<TypeHabitat />}></Route>

                    <Route
                      path="Secondaireprincipale"
                      element={<Secondaireprincipale />}
                    ></Route>
                    <Route path="Dependance" element={<Dependance />}></Route>
                    <Route path="Resiliation" element={<Resiliation />}></Route>
                    <Route
                      path="ChangerAssurance"
                      element={<ChangerAssurance />}
                    ></Route>
                    <Route
                      path="ResiliationPeriod"
                      element={<ResiliationPeriod />}
                    ></Route>
                    <Route
                      path="NombreSinistre"
                      element={<NombreSinistre />}
                    ></Route>
                    <Route
                      path="EmailFormulaire"
                      element={<EmailFormulaire />}
                    ></Route>
                    <Route
                      path="ComplementAdresse"
                      element={<ComplementAdresse />}
                    ></Route>
                    <Route
                      path="SpecificationMaison"
                      element={<SpecificationMaison />}
                    ></Route>
                    <Route
                      path="DetailMaison"
                      element={<DetailMaison />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default FormulaireIndex;
