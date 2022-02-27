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
import NiveauImmeuble from "./parcourImeuble/NiveauImmeuble"
import TypeEntreprise from  './parcourImeuble/TypeEntreprise'
import NombreSinistreImmeuble  from  './parcourImeuble/NombreSinistreImmeuble'
import DateAssembleGenerale from './parcourImeuble/DateAssembleGenerale'
import TypeCoprepriété from "./parcourImeuble/TypeCoprepriété"  
import ImmeubleProspectInfo  from  './parcourImeuble/ImmeubleProspectInfo'
import Niveausous_sol from  './parcourImeuble/Niveausous_sol'  
import Parking from  './parcourImeuble/Parking' 
import PeriodeContruction from  './parcourImeuble/PeriodeContruction' 
import TravauxRenovation from './parcourImeuble/TravauxRenovation'
import PourcentagePropreitaire from './parcourImeuble/PourcentagePropreitaire'
import ImeubleProp from './parcourImeuble/ImeubleProp'  
import TypeImmeuble from './parcourImeuble/TypeImmeuble'
import UsageImmeuble from  './parcourImeuble/UsageImmeuble' 
import Occupation  from  './parcourImeuble/Occupation'
import PropiertaireOccupants from  './parcourImeuble/PropiertaireOccupants' 
import ActuellmentAssure  from './parcourImeuble/ActuellmentAssure'
import ImmeubleGeneralinfo from './parcourImeuble/ImmeubleGeneralinfo'
import SurfaceComerciale from './parcourImeuble/SurfaceComerciale'
import ActiviteComerciale from './parcourImeuble/ActiviteComerciale'
import BesoinResilierImmeuble from './parcourImeuble/BesoinResilierImmeuble'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaireImmeuble from './parcourImeuble/index'
import InstallationImeuble from './parcourImeuble/InstallationImeuble'
import Navbar from "../../utils/Navbar";

const FormulaireIndex = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className=" flex flex-row justify-between justify-content  mx-auto  ">
          <div className="w-full h-full">
            <div className="flex flex-col items-center justify-center py-1  ">
              <div className="pt-8 md:pt-20">
                <div className=" ">
                  <Routes>
                  <Route  path="Immeuble" element={<FormulaireImmeuble/>}> 
                      <Route  path="NiveauImmeuble" element={<NiveauImmeuble />} />
                      <Route  path="TypeCoprepriete" element={<TypeCoprepriété />} />
                      <Route  path="Niveausous_sol" element={<Niveausous_sol />} />
                      <Route  path="Parking" element={<Parking />} />
                      <Route  path="PeriodConstruction" element={<PeriodeContruction />} />
                      <Route  path="ImeubleProp" element={<ImeubleProp />} />
                      <Route  path="InstallationImeuble" element={<InstallationImeuble />} />
                      <Route  path="UsageImmeuble" element={<UsageImmeuble/>} />
                      <Route  path="PropiertaireOccupants" element={<PropiertaireOccupants/>} />
                      <Route  path="ActuellmentAssure" element={<ActuellmentAssure/>} />
                      <Route  path="BesoinResilierImmeuble" element={<BesoinResilierImmeuble/>} />
                      <Route  path="Occupation" element={<Occupation/>} />
                      <Route  path="ImmeubleGeneralinfo" element={<ImmeubleGeneralinfo/>} />
                      <Route  path="TypeImmeuble" element={<TypeImmeuble/>} />
                      <Route  path="PeriodeContruction" element={<PeriodeContruction/>} />
                      <Route  path="TravauxRenovation" element={<TravauxRenovation/>} />
                      <Route  path="SurfaceComerciale" element={<SurfaceComerciale/>} />
                      <Route  path="ActiviteComerciale" element={<ActiviteComerciale/>} />
                      <Route  path="PourcentagePropreitaire" element={<PourcentagePropreitaire/>} />
                      <Route  path="NombreSinistreImmeuble" element={<NombreSinistreImmeuble/>} />
                      <Route  path="TypeEntreprise" element={<TypeEntreprise/>} />
                      <Route  path="ImmeubleProspectInfo" element={<ImmeubleProspectInfo/>} />
                      <Route  path="DateAssembleGenerale" element={<DateAssembleGenerale/>} />
                      
                      
                      

                      
                      </Route>
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
