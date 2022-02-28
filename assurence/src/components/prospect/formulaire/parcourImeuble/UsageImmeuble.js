import React  ,  {useState} from 'react'
import Two_Option_Base from './Grid_theme/Two_Option_Base'
import GridMultipleOption  from  "../../../utils/gridMultipleOption"   
import Button  from  '../../../utils/Button'
import  { useDispatch , useSelector} from  'react-redux'
import DialogEmail from  '../../../utils/DialogEmail'
import  habitation from  '../../../../assets/image_finale/habitation.png'
import  habitation_colorer from  '../../../../assets/image_finale/habitation_colorer.png'
import  commerciale from  '../../../../assets/image_finale/commerciale.png'
import  commerciale_colorer from  '../../../../assets/image_finale/commerciale_colorer.png'
import { save_usage } from '../../../../redux/actions/ImmeubleData'

var  Usage_immeuble = []
function UsageImmeuble() { 
  
  const data =  useSelector(state => state.FormReducer)
  const dispatch =  useDispatch()  
  
  let [Usage, setUsage]= useState(Usage_immeuble)
  let [counter, setCounter]= useState(0) 

  
  const senddata = (e)=>{
    e.preventDefault() ;
    dispatch(save_usage(Usage))
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
          <GridMultipleOption  counter={counter} id="Habitation"  choix={Usage} src={habitation} src_c ={habitation_colorer}    text_option="Habitaion"/>
          </div>
          <div  id="commerciale/professionnel" onClick={change}  className="dblclick" >
          <GridMultipleOption counter={counter} id="commerciale/professionnel"  choix={Usage} src={commerciale} src_c={commerciale_colorer} text_option="Activite commerciale ou professionnel"/>
          </div>
    </Two_Option_Base>
    <div>
      <div className='h-8'></div>
    {Usage.length !==0 ? 
        Usage.includes("commerciale/professionnel") ?  
        Usage.length > 1?  
        <div onClick={senddata}><Button Suivant="Immeuble/SurfaceComerciale" /></div> : 
        <DialogEmail/>:
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>: 
          undefined} 
      </div>
    </div>
  )
}

export default UsageImmeuble
