import {
INFO_IMMEUBLE, 
NIVEAUX_IMMEBLE, 
NIVEAU_SOUS_SOL,
PARKING,  
TYPE_PROPRIETE,   
TYPE_COPROPIETE, 
TYPE_IMMEUBLE, 
ANNEE_CONSTRUCTION, 
INSTALLATION, 
TRAVEAUX, 
USAGE, 
SURFAE_COMMERCE, 
SPECIFICATION_ACTIVITE,  
OCCUPATION, 
TAUX_OCCUPATION, 
NBR_SINISTRE, 
TYPE_ENTREPRISE,  
COORDONNER_CLIENT, 
DATE_ASSEMBLE,  
ASSURANCE, 
RESILIATION
}
from '../actions/ImmeubleData'


const  ImmeubleFormReducer = (state = {} ,  action)=> {
switch (action.type) {
    case INFO_IMMEUBLE : 
    return {
        ...state,
        
    }
    case NIVEAUX_IMMEBLE : 
    return {
        ...state,
        niveau_immeuble :  action.niveau_immeuble
    }
    case NIVEAU_SOUS_SOL: 
    return {
        ...state,
        niveau_soussol  :  action.niveau_soussol
    }
    case PARKING  : 
    return {
        ...state,
        parking  :  action.parking
    }
    case TYPE_PROPRIETE   : 
    return {
        ...state,
        propriete  :  action.propriete
    }
    case TYPE_COPROPIETE : 
    return {
        ...state,
        copropriete:  action.copropriete
    }
    case TYPE_IMMEUBLE : 
    return {
        ...state,
        type_immeuble  :  action.type_immeuble
    }
    case ANNEE_CONSTRUCTION : 
    return {
        ...state,
        date_construction  :  action.date_construction
    }
    case INSTALLATION : 
    return {
        ...state,
        installations  :  action.installations
    }
    case TRAVEAUX : 
    return {
        ...state,
        traveaux  :  action.traveaux
    }
    case USAGE : 
    return {
        ...state,
        usage  :  action.usage
    }
    case SURFAE_COMMERCE : 
    return {
        ...state,
        surface_commerce  :  action.surface_commerce
    }
    case SPECIFICATION_ACTIVITE  : 
    return {
        ...state,
        specification_activite  :  action.specification_activite
    }
    case OCCUPATION : 
    return {
        ...state,
        occupation  :  action.occupation
    }
    case TAUX_OCCUPATION : 
    return {
        ...state,
        tauxOccupation  :  action.tauxOccupation
    }
    case NBR_SINISTRE : 
    return {
        ...state,
        nbr_sinistre  :  action.nbr_sinistre
    }
    case TYPE_ENTREPRISE  : 
    return {
        ...state,
        type_entreprise  :  action.type_entreprise
    }
    case COORDONNER_CLIENT : 
    return {
        ...state,
        coordonner_client  :  action.coordonner_client
    }
    case DATE_ASSEMBLE  : 
    return {
        ...state,
        date_assemble  :  action.date_assemble
    }
    case ASSURANCE : 
    return {
        ...state,
        assurence  :  action.assurence
    }
    case RESILIATION: 
    return {
        ...state,
        resiliation  :  action.resiliation
    }
    default: return state 




}
}
export default ImmeubleFormReducer