import {useNavigate} from 'react-router-dom'; 
import { useSelector } from 'react-redux';



export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatProspect (prospect) {
    return { 
    Prospect : { 
        nom :  prospect.nom,
        prenom :prospect.prenom,
        adresse_email :  prospect.adresse_email, 
        adresse : prospect.adresse
    }  
  } 
}


export function  format_devis_maison(id , data_devis) {  
  let  veranda = false ;
  let  cheminée = false ; 
  let  piscine = false ;   
  console.log(data_devis)
  if (data_devis.DependanceMaison.includes('Veranda')){
    veranda= true;  
  }
  if (data_devis.DependanceMaison.includes('Cheminée')){
    cheminée= true;  
  }
  if (data_devis.DependanceMaison.includes('Piscine')){
    piscine= true;  
  }
  console.log("this is verif" ,  data_devis)
return {
    id :  id  ,  
    adresse :  data_devis.adresse.adresse,
    complement :  data_devis.adresse.Complement , 
    email_prospect: data_devis.email, 
    besoin_resiliation:data_devis.resiliation , 
    type_residence:data_devis.PropSecond , 
    Cheminée:cheminée,
    Veranda:veranda, 
    Piscine:piscine,  
    Surface:data_devis.detailMaison.surface,  
    type_propriete:data_devis.propriety,  
    nbrChambre:data_devis.detailMaison.nbrpiece,  
    dependance:data_devis.dependance.exist, 
    surface_depandance:data_devis.dependance.surface, 
    periode_construction: data_devis.detailMaison.construction,
    type_resiliation:data_devis.besoinres,  
    nbr_sinistre:data_devis.nbrsinistre, 
    resiliation:data_devis.resiliation,  
    periode_resiliation:data_devis.ResiliationP? data_devis.ResiliationP.periode : null,  
    date_resiliation:data_devis.ResiliationP? data_devis.ResiliationP.date_res : null,  
    Tarification:0,
    franchise:0,
    interraction:true

  }

}



export function  format_devis_apartement(id , data_devis) {  
 
  
return {
    id :  id  ,  
    adresse :  data_devis.adresse.adresse,
    complement :  data_devis.adresse.Complement , 
    email_prospect: data_devis.email, 
    besoin_resiliation:data_devis.resiliation , 
    type_residence:data_devis.PropSecond , 
    Surface:data_devis.appartspecification.surface,  
    type_propriete:data_devis.propriety,  
    nbrChambre:data_devis.appartspecification.nbrpiece,  
    dependance:data_devis.dependance.exist, 
    surface_depandance:data_devis.dependance.surface, 
    periode_construction: data_devis.appartspecification.etage,
    type_resiliation:data_devis.besoinres,  
    nbr_sinistre:data_devis.nbrsinistre, 
    resiliation:data_devis.resiliation,  
    periode_resiliation:data_devis.ResiliationP? data_devis.ResiliationP.periode : null,  
    date_resiliation:data_devis.ResiliationP? data_devis.ResiliationP.date_res : null,  
    Tarification:0,
    franchise:0,
    interraction:true

  }

}

export function  format_devis_immeuble(id , Adresse , data_immeuble) {  
  
  let activites =  data_immeuble.Activite ? data_immeuble.Activite  :  null
  let copropriete = null 
  if  (!data_immeuble.copropriete || data_immeuble.propriete == "monopropriété") {
    copropriete =   null  }else{ 
      copropriete = data_immeuble.copropriete 
    }
  
  
  
  let actuallement_assurer = data_immeuble.Actuallement_assurer =="oui" ? true :  false
  let resilier  = data_immeuble.resiliation == "oui"?  true : false  
  let tOccupation =  data_immeuble.tauxOccupation == "oui" ?  true :  false
  console.log("this is " , id)
  console.log(data_immeuble.Activite )

return {
    id :  id  ,  
    adresse :  Adresse.adresse , 
    complement :  Adresse.Complement , 
    surface_immeuble:data_immeuble.surface,
    nombre_lots:data_immeuble.Nlots,
    Niveau_immeuble:data_immeuble.niveau_immeuble,
    Niveau_sous_sol:data_immeuble.niveau_soussol,
    Parking:data_immeuble.parking,
    type_propriete:data_immeuble.propriete,
    type_copropriete:copropriete,
    type_batiment:data_immeuble.type_immeuble,
    periode_construction:data_immeuble.date_construction,
    installation:data_immeuble.installations,
    traveaux:data_immeuble.traveaux,
    usage_immeuble:data_immeuble.usage,
    activite_commerciale:activites,
    occupation:data_immeuble.occupation,
    taux_proprietaire:tOccupation,
    nbr_sinistre:data_immeuble.nbr_sinistre,
    type_entreprise:data_immeuble.type_entreprise,
    date_assemblee:data_immeuble.date_assemble,
    ancien_assurence:actuallement_assurer,
    resiliation:resilier,
    Tarification:0,
    franchise:0,
    email_prospect:data_immeuble.coordonner_client.email
  }


    /*surface immeuble occupe par commerce */ 

}
