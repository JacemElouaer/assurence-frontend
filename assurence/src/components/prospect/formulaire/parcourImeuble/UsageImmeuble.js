import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"   
import Button  from  '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
var  Usage_immeuble = []
function UsageImmeuble() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Usage, setUsage]= useState(Usage_immeuble)
  let [counter, setCounter]= useState(0) 

  
  const senddata = (e)=>{
    e.preventDefault() ;
  }

  function change(e) {
    e.preventDefault();
    if (Usage_immeuble.includes(e.target.id)){
      Usage_immeuble = Usage_immeuble.filter(dept => dept!==e.target.id);
      setCounter(counter = counter-1); 
    }
    else {
      Usage_immeuble.push(e.target.id);
      setCounter(counter =  counter+1); 
    } 
    setUsage( Usage_immeuble)
  }
 
 
          
  return (
    <div>
    <Two_Option_Base text="L'immeuble est à usage ? ">
           <div  id="Habitation" onClick={change} className="dblclick"  >
          <GridMultipleOption  counter={counter} id="Habitation"  choix={Usage} src={null}    text_option="Habitaion"/>
          </div>
          <div  id="commerciale/professionnel" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="commerciale/professionnel"  choix={Usage} src={null} text_option="Activite commerciale ou professionnel"/>
          </div>
    </Two_Option_Base>
    <div>
    {Usage.length !==0 ? 
        Usage.includes("commerciale/professionnel") ?  
        <div onClick={senddata}><Button Suivant="Immeuble/SurfaceComerciale" /></div> :  
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>: 
          undefined} 
      </div>
    </div>
  )
}

export default UsageImmeuble
