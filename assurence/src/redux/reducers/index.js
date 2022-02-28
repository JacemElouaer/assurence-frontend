import FormReducer from './froms';
import ImmeubleFormReducer from './immeuble'
import {combineReducers} from  "redux"




// combine reducers in all senario case 

const  allReducers = combineReducers({
    FormReducer, ImmeubleFormReducer 

})
export default allReducers


