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
SAVE_MAISON_DETAIL
} from '../actions/formsData'

const  FormReducer = (state= {} ,  action)=> {
    switch(action.type){
        case SAVE_ADRESS : 
        console.log(action)
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
            datailMaison : action.datailMaison,
            }
        case SAVE_PROGRESS : 
        return {    
        ...state, 
        progress :  action.progress}
        default: 
        return  state
    
    }


}
export default FormReducer; 