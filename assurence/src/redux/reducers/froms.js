import { 
SAVE_ADRESS ,
SAVE_GENERALINFO,
SAVE_PROPRIETYCHOICE,
SAVE_TYPEHABITAT,
SAVE_PROPSECON,
SAVE_APPARTSPECIFICATION,
SAVE_DEPENDACE,
SAVE_SNISTRENUMBER,
SAVE_RESILIATION,
SAVE_DEPENDANCE_MAISON,
SAVE_PROGRESS,
SAVE_MAISON_DETAIL,
SAVE_BESOIN_RES,
SAVE_RESOLUTION_PERI,
SAVE_PROSPECTINFO, 
SAVE_PROSPECT,
RESET_REDUCER
} from '../actions/formsData'
const  defaultState= {}

const  FormReducer = (state = {} ,  action)=> {
    switch(action.type){ 
        case SAVE_PROSPECT: 
        return  {
            ...state,
            email : action.email, 
            daten :  action.daten
        }
        case SAVE_ADRESS : 
        return {
            ...state,
            adresse: action.adresse ,  
        }
        case SAVE_GENERALINFO : 
        return  {
            ...state,
            generalinfo:action.generalinfo
        }
        case SAVE_TYPEHABITAT:
            return {
                ...state,
                type_habitat:action.type_habitat,
            }
        case SAVE_PROPRIETYCHOICE : 
        console.log(action.propriety)
        return  {
            ...state,
            propriety: action.propriety,
        }
        case SAVE_PROPSECON:
            return {
                ...state,
                PropSecond :  action.PropSecond,
            }
        case SAVE_APPARTSPECIFICATION : 
        return  {
            ...state,
            appartspecification : action.appartspecification,
                
        }
        case  SAVE_DEPENDACE: 
        return  {
            ...state,
            dependance : action.dependance,
                
        } 
        case SAVE_DEPENDANCE_MAISON : 
        return  {
            ...state,
            DependanceMaison :  action.DependanceMaison
        }
        case SAVE_SNISTRENUMBER:  
        return {
            ...state,
            nbrsinistre : action.nbrsinistre,
        } 
        case  SAVE_RESILIATION : 
        return {
            ...state,
            resiliation : action.resiliation,
        }
        case  SAVE_MAISON_DETAIL : 
            return  {
            ...state,
            detailMaison : action.detailMaison,
            }
        case SAVE_PROGRESS : 
        return {    
            ...state, 
            progress :  action.progress}
        case SAVE_BESOIN_RES : 
        return {    
            ...state, 
            besoinres :  action.besoinres}
        case SAVE_RESOLUTION_PERI:
        return {
            ...state,
            ResiliationP : action.ResiliationP
        } 
        case SAVE_PROSPECTINFO: 
        return  {
            ...state,
            email : action.prospect,  

        }
        case RESET_REDUCER :  
        return  {
            }
        default: 
        return  state 
    
    }


}
export default FormReducer; 