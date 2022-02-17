import React ,  {useEffect, useState} from 'react';
export default function SelectLabels() {
  let option   =  ["janvier" , "fevrier" ,  "mars" ,  "avril" ,  "mai" , "join" , "juillet" ,  "out" , "septembre" , "novembre ", "octobre", "decembre"]
  let  [mois ,  setMois] =  useState("1")
  
  let [dateRes  , setDateRes] =  useState('') 
 
  const d = new Date();
  let month = d.getMonth()+1; 
  let year  = d.getFullYear()
  console.log(year)

  let [Year ,  setYear] =  useState(year)
  useEffect(()=>{
    if(mois>month){
      setDateRes(mois+1)
    }
    if(mois<=month){
      setDateRes(month)
      setYear(year+1)
    }
  })
  
  
  function  onchange(e){
    setMois(e.target.value) 
  }
  
  return (
    <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
         id="grid-state" onChange={onchange}>
          {option.map((m)=><option value= {option.indexOf(m)} >{m}</option>)}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  );
}
