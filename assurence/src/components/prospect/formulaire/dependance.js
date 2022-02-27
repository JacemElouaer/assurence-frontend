import React , {useState  ,  useEffect} from "react";
import Button from "../../utils/Button";
import StyledRadio from "../../utils/StyledRadio";
import dependance from  '../../../assets/image_finale/dependance.png'
import dependance_color from  '../../../assets/image_finale/dependance_color.png'
import {saveDependance } from '../../../redux/actions/formsData' 
import {useDispatch ,  useSelector } from  'react-redux' ; 
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import  {saveProgress} from '../../../redux/actions/formsData'

function Dependance() {
const data =  useSelector(state => state.FormReducer)

let bsurface = data.dependance ?  data.dependance.surface
   : undefined ;  
   let  bexist  = "Non";  
if  (data.dependance) {
  bexist =  data.dependance.exist ?  "Oui" :  "Non";  
   } 

   
   useEffect(() => {
      dispatch(saveProgress(55))
   }, []);


const dispatch =  useDispatch()



let [exist ,  setExist ] =  useState(bexist)
let [surface ,  setSurface ] =  useState(bsurface)

const  changeDep = (e)=> {
  e.preventDefault() 
  if(e.target.value ==="Oui") {
    setExist("Oui")
  } else {
    setExist("Non") 
    setSurface(null)
  }
}

function  senddata(e){
  e.preventDefault() ; 
  let  ex =  false ; 
  if(surface!=="" && exist){ 
    ex = exist==="Oui"? true :  false;  
     
   dispatch(saveDependance({exist:  ex ,  surface}))
  } 
} 




  return (
   
            <div class=" mx-auto   w-full  md:w-800   " >
              
              <div class=" text-13-18 lg:text-16-22 text-center mt-5 lg:mt-2.5 mb-5 lg:mb-10">
              <div className="mx-auto w-full md:w-800  text-center pb-2 pl-4 pr-4">
          <p className="text-xl xs:text-3xl md:text-5xl text-[#444]  text-center  font-sans lg:w-full ">
           Y a t-il des dépendances ?
             </p>
             <p className="text-xl xs:text-2xl md:text-3xl text-[#444]  text-center  font-sans lg:w-full ">

                  Par exemple : une remise, un garage, une cave séparée,...
              </p>
                </div>
              </div>
              <div class="md:mb-5 lg:mb-7">
                <div class="flex justify-center">
                  {exist === 'Non' ? <img class="object-contain w-28 h-28"  src={dependance}  alt="" /> :
                  <img class="object-contain w-28 h-28"  src={dependance_color} alt="" />   }
                </div>
              </div>
              <div class="md:mb-5 ">
                <div class="">
                  <div class="flex justify-center mx-auto lg:gap-x-11 flex-wrap h-full">
                    
                  <RadioGroup
                  onChange={changeDep}
                  row
                  value={exist}
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="top">
                  <FormControlLabel
                    value="Non"
                    control={<StyledRadio/>}
                    label="Nom"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="Oui"
                    control={<StyledRadio/>}
                    label="Oui"
                    labelPlacement="top"
                  />
                  
                  </RadioGroup>
                </div>
                </div> 
              </div>
     
{exist ==="Oui" ? 
              <div class="flex items-center  mx-auto text-center flex-col" id="choix_surface">
              <div class="mb-5 max-w-940 xl:max-w-full">
                De quelle superficie ?</div>
              <div className="justify-items-center">
              <RadioGroup
                onChange={(e)=>setSurface(e.target.value)}
                  row
                  value = {surface}
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="top"
                >
                 
                  <FormControlLabel
                    value="small"
                    control={<StyledRadio/>}
                    label="Moin de 21 m"
                    labelPlacement="top"
                  />
                  
                  <FormControlLabel
                    value="medium"
                    control={<StyledRadio/>}
                    label="21 m à 100 m"
                    labelPlacement="top"
                  />
                   <FormControlLabel
                    value="big"
                    
                    control={<StyledRadio/>}
                    label="plus de 100 m"
                    labelPlacement="top"
                  />
                  </RadioGroup>
              </div>
                <div/>
                </div> :  undefined }
        
        
        
        <div className="flex  justify-center text-center  items-center flex-col pt-4 " onClick={senddata} role="button">
          <Button Suivant="SpecificationMaison"  />
        </div> 
              
            
          </div>
         
  );
}
export default Dependance;
