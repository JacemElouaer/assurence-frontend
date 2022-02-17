import React , {useState  ,  useEffect} from "react";
import Button from "../../utils/Button";
import StyledRadio from "../../utils/StyledRadio";
import icon_noo from  '../../../assets/images/icon_noo.svg'
import {saveDependance } from '../../../redux/actions/formsData' 
import {useDispatch ,  useSelector } from  'react-redux' ; 
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import  {saveProgress} from '../../../redux/actions/formsData'

function Dependance() {
const data =  useSelector(state => state.FormReducer)

let bsurface = data.dependance ?  data.dependance.surface
   : undefined ; 
let bexist = data.dependance ?  data.dependance.exist
   : undefined ; 

   
   useEffect(() => {
      dispatch(saveProgress(55))
   }, []);


const dispatch =  useDispatch()



let [exist ,  setExist ] =  useState(bexist)
let [surface ,  setSurface ] =  useState(bsurface)


function  senddata(e){
  e.preventDefault() ;
  if(surface!=="" && exist){
   dispatch(saveDependance({exist ,  surface}))
  } 
} 




  return (
   
            <div class=" mx-auto   w-full  md:w-800   " >
              <div class="text-26 lg:text-32  text-center ">
                <span >Il y a t-il des dépendances ?</span>
              </div>
              <div class=" text-13-18 lg:text-16-22 text-center mt-5 lg:mt-2.5 mb-5 lg:mb-10">
                <div class="max-w-616 lg:px-0">
                  Exemple : une remise, un garage, une cave séparée, etc.
                </div>
              </div>
              <div class="md:mb-5 lg:mb-7">
                <div class="flex justify-center">
                  <img class="object-contain w-28 h-28"  src={icon_noo} alt="" />
                </div>
              </div>
              <div class="md:mb-5 ">
                <div class="">
                  <div class="flex justify-center mx-auto lg:gap-x-11 flex-wrap h-full">
                    
                  <RadioGroup
                  onChange={(e)=>setExist(e.target.value)}
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
     
{exist === "Oui" ? 
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
                    label="21 m à 100 m "
                    labelPlacement="top"
                  />
                   <FormControlLabel
                    value="big"
                    
                    control={<StyledRadio/>}
                    label="plus de 100 m  "
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