import React , {useState , useEffect} from "react";
import Button from "../../utils/Button";
import BinaryOption from  '../../utils/binaryOption'
import SelectLabels from '../../utils/SelectLabels'
import  {saveProgress} from '../../../redux/actions/formsData'
import {saveResiliationPeriode} from '../../../redux/actions/formsData' ; 
import {useDispatch ,  useSelector} from  'react-redux'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import StyledRadio from "../../utils/StyledRadio";

let option   =  ["Janvier" , "Fevrier" ,  "Mars" ,  "Avril" ,  "Mai" , "Join" , "Juillet" ,  "Aout" , "Septembre" , "Octobre", "Novembre ", "Decembre"]
 
function ResiliationPeriod() { 
  const dispatch =  useDispatch()
  
   
  const d = new Date();
  let mois_courant = d.getMonth() === 11 ?  12  : d.getMonth()+1 ; 
  let year_courant  = d.getFullYear()
  
  useEffect(() => {
     dispatch(saveProgress(95))
  }, []);
  let data =  useSelector(state=> state.FormReducer)
let bchoix =data.ResiliationP ?   data.ResiliationP.periode:  ""
let bdate =  data.ResiliationP ?   data.ResiliationP.dateres :  ""

  let [periode ,  setChoix] =  useState(bchoix) 
  let [date_res ,  setDateRes] = useState(bdate)
  let  [choisen_year ,  setChoisenYear] = useState("")

  let [month ,  setMonth] =  useState("")
  let [year ,  setYear] =  useState("") 
 
  let current_day  =d.getDate()

  const changeResdate=(m , y)=>{
    setMonth(m)
    setYear(y) 
    setDateRes(`01/${m}/${y}`) 
  }
  

 useEffect(() => {
   
  if(periode==="Plus de 12 mois"){
    setDateRes(`01/${option[mois_courant]}/${year_courant}`)
  } 
  
})
const  handleYear = (e)=>{
  setChoisenYear(e.target.value)
  if(e.target.value == year_courant){
    setDateRes(`01/${month}/${year_courant+1}`)
  }
  if(e.target.value == year_courant-1){ 
    let date = new Date();
    date.setDate(date.getDate() + 32);  
    setDateRes( `${date.getDate()}/${option[date.getMonth()]}/${year_courant}`) 
    console.log(date.getDay() , date)   
  }
  console.log(date_res)


}
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
        <div className="grid grid-cols-1  2xs:grid-cols-2   s:grid-cols-2 gap-5 "  >
        <div onClick={change} id="Moin de 12 mois"> 
        <BinaryOption id="Moin de 12 mois" type="oui" text="type_1" choix={periode}  option_text="Moin de 12 mois"/>
        </div>
        <div onClick={change} id="Plus de 12 mois">
        <BinaryOption id="Plus de 12 mois" type="non" text="type_1" choix={periode} option_text= "Plus de 12 mois" />
        </div>
        </div>
      </main>
      <div className="flex  justify-center mx-auto  mt-2">   
    {periode==="Moin de 12 mois"?
      <div>
      <SelectLabels  setResDate = {changeResdate} mois={bdate.split('/')[1]}  />
      {date_res ?
        mois_courant == month  ?  
        <div className='mt-4'>
            <RadioGroup
        onChange={handleYear}
          row
          value={choisen_year}
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top">
          <FormControlLabel

            value={year_courant-1}
            control={<StyledRadio/>}
            label={year_courant-1}
            labelPlacement="top"
          />
          <FormControlLabel
            value={year_courant}
            control={<StyledRadio/>}
            label={year_courant}
            labelPlacement="top"
          />
          
          </RadioGroup>  
        </div>
        
        
        :  undefined : 
        undefined}
      </div>
       :
       periode ==="Plus de 12 mois"? <div></div>:undefined 

       }    
     {/*  <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
 <p>Parfait! La date d’effet de votre contrat sera fixée au 01 {option[month]} {year} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div> :  undefined}
       
      
       :  <div class="shadow_box mt-8 text-16 text-default-grey-400 font-sans w-3/4 mx-center" >
       <p>Parfait! La date d’effet de votre contrat sera fixée au 01  {option[mois_courant]} {year_courant} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
      </div> */}
     </div>
      <div onClick={senddata}>
      <Button Suivant="EmailFormulaire" />
      </div>
   
    </div>
  );
}

export default ResiliationPeriod;
