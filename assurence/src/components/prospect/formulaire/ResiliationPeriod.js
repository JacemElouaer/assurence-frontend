import React , {useState , useEffect} from "react";
import Button from "../../utils/Button";
import BinaryOption from  '../../utils/binaryOption'
import SelectLabels from '../../utils/SelectLabels'
import  {saveProgress} from '../../../redux/actions/formsData'
import {saveResiliationPeriode} from '../../../redux/actions/formsData' ; 
import {useDispatch ,  useSelector} from  'react-redux'

let option   =  ["Janvier" , "Fevrier" ,  "Mars" ,  "Avril" ,  "Mai" , "Join" , "Juillet" ,  "Aout" , "Septembre" , "Octobre", "Novembre ", "Decembre"]
 
function ResiliationPeriod() { 
  const dispatch =  useDispatch()
  
  
  const d = new Date();
  let mois_courant = d.getMonth() === 11 ?  0  : d.getMonth()+1 ; 
  let year_courant  = d.getFullYear()
  
  useEffect(() => {
     dispatch(saveProgress(95))
  }, []);
  let data =  useSelector(state=> state.FormReducer)
let bchoix =data.ResiliationP ?   data.ResiliationP.periode:  ""
let bdate =  data.ResiliationP ?   data.ResiliationP.dateres :  ""

  let [periode ,  setChoix] =  useState(bchoix) 
  let [date_res ,  setDateRes] = useState(bdate)

  let [month ,  setMonth] =  useState("")
  let [year ,  setYear] =  useState("") 


  const changeResdate=(m , y)=>{
    setMonth(m)
    setYear(y) 
    setDateRes(`01/${m}/${y}`)    
  }

 useEffect(() => {
   
  if(periode==="Plus de 12 mois"){
    setDateRes(`01/${option[mois_courant]}/${year_courant}`)
  } 
  else{
    setDateRes(`01/${option[month]}/${year}`)
  }
  console.log(date_res.split('/')[1])
})

 const change= (e)=> {
    if (e.target.id === "Moin de 12 mois"){
      setChoix(periode="Moin de 12 mois")
    } 
    if(e.target.id ===  "Plus de 12 mois"){
      setChoix(periode="Plus de 12 mois")
      } 
      
 };
 
 const senddata = (e)=>{
  e.preventDefault() ;
  dispatch(saveResiliationPeriode({periode ,  date_res}))
}


  
  return (
    <div className="mt-1">
      <div className="">
      <div className="mx-auto w-full md:w-800  text-center pb-2">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
          </p>
        </div>
      </div>
      <main className="flex justify-center mt-16">
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 grid-shape"  >
        <div onClick={change} id="Moin de 12 mois"> 
        <BinaryOption id="Moin de 12 mois" type="oui" text="type_1" choix={periode}  option_text="Moin de 12 mois"/>
        </div>
        <div onClick={change} id="Plus de 12 mois">
        <BinaryOption id="Plus de 12 mois" type="non" text="type_1" choix={periode} option_text= "Plus de 12 mois" />
        </div>
        </div>
      </main>
      {periode==="Moin de 12 mois"?
       <div className="mt-8"> 
 
       <div className="flex  justify-center mx-auto  mt-5">     
       <SelectLabels  setResDate = {changeResdate} mois={bdate.split('/')[1]}  /></div>
       {date_res !== "" ?      
       <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
 <p>Parfait! La date d’effet de votre contrat sera fixée au 01 {option[month]} {year} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div> :  undefined}
       
       </div>
       :  <div class="shadow_box mt-8 text-16 text-default-grey-400 font-sans w-600" >
       <p>Parfait! La date d’effet de votre contrat sera fixée au 01  {option[mois_courant]} {year_courant} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div>
    }
      <div class="mt-16" onClick={senddata}>
      
      <Button Suivant="EmailFormulaire" />
      </div>
    </div>
  );
}

export default ResiliationPeriod;
