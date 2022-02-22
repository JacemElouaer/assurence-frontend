export const  SAVE_ADRESS = 'SAVE_ADRESS';
export const  SAVE_GENERALINFO = 'SAVE_GENERALINFO';
export const  SAVE_PROPRIETYCHOICE = 'SAVE_PROPRIETYCHOICE';
export const  SAVE_TYPEHABITAT =  "SAVE_TYPEHABITAT"
export const  SAVE_PROPSECON =  "SAVE_PROPSECON";
export const  SAVE_APPARTSPECIFICATION =  "SAVE_APPARTSPECIFICATION"; 
export const  SAVE_DEPENDACE =  "SAVE_DEPENDACE";
export const  SAVE_SNISTRENUMBER ="SAVE_SNISTRENUMBER";
export const  SAVE_RESILIATION =  "SAVE_RESILIATION";
export const  SAVE_DEPENDANCE_MAISON = "SAVE_DEPENDANCE_MAISON"
export const  SAVE_PROGRESS ="SAVE_PROGRESS"  
export const  SAVE_MAISON_DETAIL = "SAVE_MAISON_DETAIL"
export const  SAVE_PROSPECTINFO = "SAVE_PROSPECTINFO"
export const  SAVE_BESOIN_RES =  "SAVE_BESOIN_RES"
export const  SAVE_RESOLUTION_PERI = "SAVE_RESOLUTION_PERI" 
export const  SAVE_PROSPECT =  "SAVE_PROSPECT";  


export function saveAdress(adresse){
    return  {   
        type : 'SAVE_ADRESS',
        adresse
    }
}
export function savenombresinistre(nbrsinistre){
    return  {
        type : 'SAVE_SNISTRENUMBER',
        nbrsinistre
    }
}
export function saveTypeHabitat(type_habitat){
    return  {
        type : 'SAVE_TYPEHABITAT',
        type_habitat,
    }
}
export function saveGenaralInfo(generalinfo){
    return  {
        type : 'SAVE_GENERALINFO',
        generalinfo
    }
}
export function saveproprietyChoice(propriety){
    return  {
        type : 'SAVE_PROPRIETYCHOICE',
        propriety
    }
}
export function savePropSecond(PropSecond){
    return  {
        type : 'SAVE_PROPSECON',
        PropSecond,
    }
}
export function saveDependance(dependance){
    return  {
        type : 'SAVE_DEPENDACE',
        dependance,
    }
}
export function saveDependanceMaison(DependanceMaison){
    return {
        type:  'SAVE_DEPENDANCE_MAISON', 
        DependanceMaison
    }
}
export function saveResiliation(resiliation){
    return  {
        type : 'SAVE_RESILIATION',
        resiliation,
    }
}
export function saveAppartSpecification(appartspecification){
    return  {
        type : 'SAVE_APPARTSPECIFICATION',
        appartspecification, 
    }
}

export function  saveMaisonDetail (detailMaison){
    return  {
        type : "SAVE_MAISON_DETAIL" , 
        detailMaison
    }
}

export function  saveProgress(progress){
    return   {
        type : "SAVE_PROGRESS", 
        progress
    }
} 


export function saveProspectInfo(prospect){
    console.log('step1')
    return  {
        type : "SAVE_PROSPECTINFO" , 
        prospect
    }
} 
export  function saveProspect(email ,  daten) 
{
    console.log(email ,  daten) 
    return  {
        type :  "SAVE_PROSPECT", 
        email, 
        daten, 
    }
}

export function  saveBesoinRes(besoinres){
    return  {
        type :"SAVE_BESOIN_RES" , 
        besoinres
    }
}
export function  saveResiliationPeriode(ResiliationP){
    return  {
        type :  "SAVE_RESOLUTION_PERI",
        ResiliationP
    }
}