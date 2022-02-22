import {createStore , applyMiddleware}  from  'redux' 
import thunk from "redux-thunk"
import allReducers from './reducers';



const  initialStore ={}
 
const middleware = {thunk}


const  store = createStore(allReducers , initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
export default store