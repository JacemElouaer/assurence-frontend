export const INFO_IMMEUBLE ="INFO_IMMEUBLE"
export const NIVEAUX_IMMEBLE =  "NIVEAUX_IMMEBLE"
export const NIVEAU_SOUS_SOL= "NIVEAU_SOUS_SOL"
export const PARKING = "PARKING" 
export const TYPE_PROPRIETE  = "TYPE_PROPRIETE" 
export const TYPE_COPROPIETE = "TYPE_COPROPIETE"
export const TYPE_IMMEUBLE = "TYPE_IMMEUBLE"
export const ANNEE_CONSTRUCTION =  "ANNEE_CONSTRUCTION"
export const INSTALLATION = "INSTALLATION"
export const TRAVEAUX =  "TRAVEAUX"
export const USAGE =  "USAGE"
export const SURFAE_COMMERCE =  "SURFAE_COMMERCE"
export const SPECIFICATION_ACTIVITE = "SPECIFICATION_ACTIVITE" 
export const OCCUPATION =  "OCCUPATION"
export const TAUX_OCCUPATION = "TAUX_OCCUPATION"
export const NBR_SINISTRE = "NBR_SINISTRE"
export const TYPE_ENTREPRISE  =  "TYPE_ENTREPRISE"
export const COORDONNER_CLIENT = "COORDONNER_CLIENT"
export const DATE_ASSEMBLE = "DATE_ASSEMBLE"  
export const ASSURANCE =  "ASSURANCE"
export const RESILIATION  = "RESILIATION"




export function save_info_immeuble(info_immeuble){
    return {
        type :  "INFO_IMMEUBLE",
        info_immeuble
    }
}
export function save_niveau_immeuble (niveau_immeuble){
    return {
        type :  "NIVEAUX_IMMEBLE",  
        niveau_immeuble
    }
}
export function save_niveau_soussol (niveau_soussol){
    return {
        type : "NIVEAU_SOUS_SOL",
        niveau_soussol
    }
}
export function save_parking (parking){
    return {
    type : "PARKING",
    parking

}
} 
export function save_propriete (propriete){
    return {
        type : "TYPE_PROPRIETE",
        propriete

    }
} 
export function save_copropriete (copropriete){
    return {
        type : "TYPE_COPROPIETE",
        copropriete

    }
}
export function save_type_immeuble (type_immeuble){
    return {
        type : "TYPE_IMMEUBLE",
        type_immeuble
        

    }
}
export function save_date_construction (date_construction){
    return {
        type :  "ANNEE_CONSTRUCTION",
        date_construction

    }
}
export function save_installation (installations){
    return {
        type : "INSTALLATION",
        installations

    }
}
export function save_traveaux (traveaux){
    return {
        type :  "TRAVEAUX",
        traveaux

    }
}
export function save_usage (usage){
    return {
    type :  "USAGE",
    usage 

}
}
export function save_surface_commerce (surface_commerce){
    return {
        type :  "SURFAE_COMMERCE",
        surface_commerce

    }
}
export function save_specification_activite (specification_activite){
    return {
        type : "SPECIFICATION_ACTIVITE",
        specification_activite

    }
} 
export function save_occupation (occupation){
    return {
        type :  "OCCUPATION",
        occupation

    }
}
export function  save_tauxOccupation(tauxOccupation){
    return {
        type : "TAUX_OCCUPATION",
        tauxOccupation
    }
}
export function save_nbr_sinistre (nbr_sinistre){
    return {
        type : "NBR_SINISTRE",
        nbr_sinistre

    }
}
export function save_type_entreprise (type_entreprise){
    return {
        type :  "TYPE_ENTREPRISE",
        type_entreprise

    }
}
export function save_coordonner_client (coordonner_client){
    return {
        type : "COORDONNER_CLIENT",
        coordonner_client

    }
}
export function  save_date_assemble(date_assemble){
    return {
        type : "DATE_ASSEMBLE",
        date_assemble 

    }
}  
export function save_assurence (assurence){
    return {
        type :  "ASSURANCE",
        assurence 
    }
}
export function save_resiliation (resiliation){
    return {
        type : "RESILIATION",
        resiliation

    }
}