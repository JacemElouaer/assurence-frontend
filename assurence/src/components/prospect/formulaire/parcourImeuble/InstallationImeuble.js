import React  ,  {useState} from 'react'
import Three_Option_Base from './Grid_theme/Three_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"  
import  { useDispatch , useSelector} from  'react-redux' 
import Button from  '../../../utils/Button'

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
      install_depandance = install_depandance.filter(dept => dept!=="Rien à signaler");
      setCounter(counter =  counter+1); 
    } 

    if(e.target.id ==="Rien à signaler"){
      install_depandance =[]
      install_depandance.push(e.target.id);
      setCounter(1);
    }
    setChoix( install_depandance)
  }
 
  return (
    <div>
    <Three_Option_Base text="Combien de niveaux sous sols comporte  votre immeuble">
          <div  id="Escalier ou planche en bois" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Escalier ou planche en bois"  choix={installation} src={null}    text_option="Escalier ou plachier en bois "/>
          </div>
          <div  id="Reseau de distribution de gaz" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="Reseau de distribution de gaz"  choix={installation} src={null} text_option="Réseau de distribution de gaz"/>
          </div>
          <div  id="Rien à signaler" counter={counter} onClick={change} className="dblclick">
          <GridMultipleOption id="Rien à signaler" choix={installation} src={null}  text_option="Rien à signaler"/>
          </div>

          
      
    </Three_Option_Base>
    <div>
    {installation  ? 
          <div onClick={senddata}><Button Suivant="Immeuble/TravauxRenovation" /></div>:  
          undefined}
          </div>
    </div>

  )
}
export default InstallationImeuble
