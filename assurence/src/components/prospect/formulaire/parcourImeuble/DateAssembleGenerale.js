import React, { useState } from "react";
import Button from "../../../utils/Button";
import Form_grid from "./Grid_theme/Form_grid";
import  { useDispatch , useSelector} from  'react-redux'
import {save_date_assemble} from '../../../../redux/actions/ImmeubleData'


function DateAssembleGenerale() {
  const dispatch =  useDispatch()
  let [Date, setDate] = useState(undefined);

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
            <select
              class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"  onChange={changeDate}
            >
              <option selected>Choisir votre date </option>
              <option value="1">1/3/2022</option>
              <option value="2">1/3/2022</option>
              <option value="3">1/3/2022</option>
            </select>
          </div>
        </div>
      </div>

      {Date? (
        <div onClick={senddata}>
          <Button Suivant="Immeuble/ActuellmentAssure" />
        </div>
      ) : undefined}
    </Form_grid>
  );
}

export default DateAssembleGenerale;
