import React, { useState } from "react";
import Button from "../../../utils/Button";
import Form_grid from "./Grid_theme/Form_grid";
import  { useDispatch , useSelector} from  'react-redux'
import {save_date_assemble} from '../../../../redux/actions/ImmeubleData'
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function DateAssembleGenerale() {


  
  const dispatch =  useDispatch()
  let [DateAssembler, setDate] = React.useState(new Date());

  const handleChange = (newValue) => {
    setDate(newValue);
  };
let minDate = new Date()
let maxDate = new Date()
maxDate.setDate(minDate.getDay()+730) 

console.log(minDate ,"this is " , maxDate)

const changeDate = (e) => {
    setDate(e.target.value);
  };
 
  const senddata = (e) => {
    dispatch(save_date_assemble(Date))
  };

  return (
    <Form_grid text="Quelle est la date de votre Assemblée Générale">
      <div class="flex flex-wrap   mb-4">
        <div class="">
          <label for="name" class="leading-7 text-md text-gray-600"></label>
        </div>
        <div class="flex justify-center mx-auto w-full">
          <div class="mb-3 xl:w-96 ">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack>
              <MobileDatePicker
              placeholder="La date de votre porchaine assemblée"
              minDate={minDate}
              maxDate={maxDate}
              value={DateAssembler}
              onChange={handleChange}
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => <TextField {...params} />}
                          
              />
            </Stack>
          </LocalizationProvider>
          </div>
        </div>
      </div>

      {DateAssembler? (
        <div onClick={senddata}>
          
          <Button Suivant="Immeuble/ActuellmentAssure" />
        </div>
      ) : undefined}
    </Form_grid>
  );
}

export default DateAssembleGenerale;
