import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';  
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/**
 * 
 * import {persistStore ,  persistReducer } from  'redux-persist';
import storage from 'redux-persist/lib/storage';
import  {PersistGate} from   'redux-persist/integration/react'

const persistConfig =
{
  key :  'main-root', 
  storage
}
const  persistedReducer= persistReducer(persistConfig ,  allReducers)
const  store = createStore(persistedReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
const Persistor=  persistStore(store)
 * 
 * 
 */