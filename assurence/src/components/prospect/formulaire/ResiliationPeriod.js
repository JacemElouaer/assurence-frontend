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
 const changeResdate=(d)=>{
   setDateRes(d)
   console.log(date_res)
  }
  

 useEffect(() => {
  if(periode==="Plus de 12 mois"){
    let date = new Date();
      date.setDate(date.getDate() + 32); 
      let day  = date.getDate()
    setDateRes(`${day}/${option[mois_courant]}/${year_courant}`)
  } 
})

const change= (e)=> {
    if (e.target.id === "Moin de 12 mois"){
      setDateRes(null)
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
      <div className="mx-auto w-full md:w-800  text-center">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
          Nous avons besoin de savoir depuis quand vous étiez assuré{ /*pour ce bien afin de définir une date de début à votre contrat*/}
         </p>
        </div>
      </div>
      <main className="flex justify-center mt-8">
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
      <SelectLabels  setResDate = {changeResdate} mois={bdate.split('/')[1]}  />
   :
       periode ==="Plus de 12 mois"? <div>

        <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
      <p>Parfait! La date d’effet de votre contrat sera fixée au {date_res.split('/')[0]}  {date_res.split('/')[1]} {date_res.split('/')[2]} pour prendre en compte la résiliation de votre ancien contrat.
        <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div>

       </div>:undefined 

       }    
    
     </div>
     {date_res ?<div onClick={senddata}>
      <Button Suivant="EmailFormulaire" />
      </div> : undefined }
      
   
    </div>
  );
}

export default ResiliationPeriod;




 /*  <div class="shadow_box mt-4 text-16 text-default-grey-400 font-sans w-600" >
 <p>Parfait! La date d’effet de votre contrat sera fixée au 01 {option[month]} {year} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
           </div> :  undefined}
       
      
       :  <div class="shadow_box mt-8 text-16 text-default-grey-400 font-sans w-3/4 mx-center" >
       <p>Parfait! La date d’effet de votre contrat sera fixée au 01  {option[mois_courant]} {year_courant} pour prendre en compte la résiliation de votre ancien contrat.
           <br/>Si nécessaire, vous pourrez modifier cette date ultérieurement.</p>
      </div> */