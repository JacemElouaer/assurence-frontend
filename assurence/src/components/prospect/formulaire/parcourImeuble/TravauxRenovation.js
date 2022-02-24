import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"  
import  { useDispatch , useSelector} from  'react-redux'
import Button from '../../../utils/Button'
var  install_depandance = [""]
function TravauxRenovation() { 
  
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
    <div>
    <Three_Option_Base text="Des travaux ont-ils été réalisés dans l'immeuble au cours des 15 dernières années ">
          <div  id="Plombier" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Plombier"  choix={installation} src={null}    text_option="Plombier"/>
          </div>
          <div  id="Toiture" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Toiture"  choix={installation} src={null} text_option="Toiture"/>
          </div>
          <div  id="Facade" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Facade" choix={installation} src={null}  text_option="Facade"/>
          </div>

    </Three_Option_Base>
    <div>
    {installation ? 
          <div onClick={senddata}><Button Suivant="Immeuble/UsageImmeuble" /></div>:  
          undefined } 
      </div> 
    </div>

  )
}

export default TravauxRenovation
