import React ,  { useState} from 'react'; 
import { useSelector } from 'react-redux';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import StyledRadio from "./StyledRadio";
export default function SelectLabels(props) {
  let option   =  ["","Janvier" , "Fevrier" ,  "Mars" ,  "Avril" ,  "Mai" , "Join" , "Juillet" ,  "Aout" ,  "Septembre", "Octobre", "Novembre ", "Decembre"]
 

    
/*let  data =  useSelector(state=>state.FormReducer)
  
    let  [mois ,  setMois] =  useState(0) */
  const d = new Date();
  let current_month = d.getMonth()+1; 
  let current_year  = d.getFullYear()
  
  let [date_res ,  setDateRes]  =  useState(null)
  let  [choisen_month ,  setMonth] = useState()
  let  [choisen_year ,  setYear] = useState()




  function  onchange(e){
  let date = new Date();
  let month  = new Date()
  month.setDate(month.getDate() + 60); 
  e.preventDefault() ;
  setMonth(e.target.value)
    if(e.target.value>d.getMonth()+2){
    props.setResDate( `1/${e.target.value}/${current_year}`)
    setDateRes( `1/${e.target.value}/${current_year}`)
  }
    if(e.target.value<current_month && e.target.value != 0){
      props.setResDate( `1/${e.target.value}/${current_year+1}`)
      setDateRes( `1/${e.target.value}/${current_year+1}`)
    } 
    if (e.target.value ==  month.getMonth() ){
      let date = new Date();
    date.setDate(date.getDate() + 32); 
    let day  = date.getDate()
    
    props.setResDate( `${day}/${day.getMonth()+1}/${current_year}`) 
    setDateRes( `${day}/${day.getMonth()+1}/${current_year}`) 
   } 
   if(e.target.value == 0){
     props.setResDate(null)
     setDateRes(null)
   }
  } 
  const handleYear=(e)=>{
    if(e.target.value == current_year){
      props.setResDate(`1/${current_month}/${current_year+1}`)
      setDateRes(`1/${current_month}/${current_year+1}`)
    }
    if(e.target.value == current_year-1){ 
      let date = new Date();
      date.setDate(date.getDate() + 32); 
       
      props.setResDate( `${date.getDate()}/${date.getMonth()+1}/${current_year}`) 
      setDateRes( `${date.getDate()}/${date.getMonth()+1}/${current_year}`) 

    }
  }
 
  
  return (
    <div>
    <div class="flex mx-auto justify-center w-full">
      <div class="relative">
        <select class="block appearance-none w-40 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
         id="grid-state" onChange={onchange}>
          {option.map((m)=><option value= {option.indexOf(m)} key={m}>{m}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
    </div>
        
        {choisen_month  == current_month ?  
        <div class="flex  justify-center mt-4">
              <RadioGroup
        onChange={handleYear}
          row
          value={choisen_year}
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top">
          <FormControlLabel

            value={current_year-1}
            control={<StyledRadio/>}
            label={current_year-1}
            labelPlacement="top"
          />
          <FormControlLabel
            value={current_year}
            control={<StyledRadio/>}
            label={current_year}
            labelPlacement="top"
          />
          
          </RadioGroup>  


        </div> :  undefined }
      
        {date_res ?  
        <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
 <p>Parfait! La date d’effet de votre contrat sera fixée au {date_res.split('/')[0]}  {option[date_res.split('/')[1]]} {date_res.split('/')[2]} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div> :  undefined
      
      
      }
      </div>
      
  );
}
