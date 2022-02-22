import React  ,  {useState} from 'react'
import Three_Option_Base from './Three_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"  
import  { useDispatch , useSelector} from  'react-redux'

var  install_depandance = ["ecalier ou placher en boix"]
function InstallationImeuble() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  let [counter, setCounter]= useState(0) 
  let [installation, setChoix]= useState(install_depandance) 
  
  const senddata = (e)=>{
    e.preventDefault() ;
  }

 
  function change(e) {
    e.preventDefault();
    if (install_depandance.includes(e.target.id)){
      install_depandance = install_depandance.filter(dept => dept!==e.target.id);
      setCounter(counter = counter-1); 
    }
    else {
      install_depandance.push(e.target.id);
      setCounter(counter =  counter+1); 
    } 
    setChoix( install_depandance)
  }
 
  return (
    
    <Three_Option_Base text="Combien de niveaux sous sols comporte  votre immeuble">
          <div  id="Escalier ou planche en bois" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Escalier ou planche en bois"  choix={installation} src={null}    text_option="Un Veranda"/>
          </div>
          <div  id="Reseau de distribution de gaz" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Reseau de distribution de gaz"  choix={installation} src={null} text_option="Un Cheminée"/>
          </div>
          <div  id="Piscine" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Piscine" choix={installation} src={null}  text_option="Un Piscine"/>
          </div>

    </Three_Option_Base>

  )
}

export default InstallationImeuble
