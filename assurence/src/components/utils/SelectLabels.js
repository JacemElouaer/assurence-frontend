import React ,  { useState} from 'react'; 
import { useSelector } from 'react-redux';
export default function SelectLabels(props) {
  let option   =  ["","Janvier" , "Fevrier" ,  "Mars" ,  "Avril" ,  "Mai" , "Join" , "Juillet" ,  "Aout" ,  "Septembre", "Octobre", "Novembre ", "Decembre"]
 

    
/*let  data =  useSelector(state=>state.FormReducer)
  
    let  [mois ,  setMois] =  useState(0) */
  const d = new Date();
  let month = d.getMonth()+1; 
  let year  = d.getFullYear()

  function  onchange(e){
   
   e.preventDefault() ;
    if(e.target.value>month){
      props.setResDate(e.target.value ,  year)
    }
   /*if(e.target.value==11){

    }*/
    if(e.target.value<=month){
      props.setResDate(e.target.value ,  year+1)
    } 
  }
 
  
  return (
    <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
         id="grid-state" onChange={onchange}>
          {option.map((m)=><option value= {option.indexOf(m)} key={m}>{m}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  );
}
