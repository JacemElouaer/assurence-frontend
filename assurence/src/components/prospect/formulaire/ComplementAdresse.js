import React from "react";

function ComplementAdresse() {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col w-582px space-y-4 lg:space-y-7">
        <div class="flex items-end gap-x-5 sm:gap-x-37px">
          <div class="w-100px sm:w-110px">
            <div class="flex items-end w-full">
              <div class="flex flex-col w-full">
                <input
                  name="address_street_number"
                  type="text"
                  inputmode="text"
                  class="h-12 w-full px-4 OpenSans-Regular  pr-8 text-16-22 border rounded-md placeholder-default-grey-300 placeholder-italic focus:outline-none
    bg-white text-default-grey-400 focus:text-teal-500 border-default-grey-200 focus:border-teal-500 "
                  value="85"
                />
                <p class="OpenSans-Regular text-12 text-acheel-pink-400 mt-0.5 w-full"></p>
              </div>
            </div>
          </div>
          <div class="flex-grow">
            <div class="flex items-end w-full">
              <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-1">
                  

                  <span class="OpenSans-Regular text-12-14 text-acheel-pink-400"></span>
                </div>
                <input
                  name="address_street_name"
                  type="text"
                  inputmode="text"
                  class="h-12 w-full px-4 OpenSans-Regular  pr-8 text-16-22 border rounded-md placeholder-default-grey-300 placeholder-italic focus:outline-none
    bg-white text-default-grey-400 focus:text-teal-500 border-default-grey-200 focus:border-teal-500 "
                  value="Avenue Charles de Gaulle"
                />
                <p class="OpenSans-Regular text-12 text-acheel-pink-400 mt-0.5 w-full"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-end justify-start gap-x-5 sm:gap-x-37px">
          <div class="w-100px sm:w-110px">
            <div class="flex items-end w-full">
              <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-1">
                
                  <span class="OpenSans-Regular text-12-14 text-acheel-pink-400"></span>
                </div>
                <input
                  name="address_postal_code"
                  type="text"
                  inputmode="text"
                  class="input-shape h-12 w-full px-4 OpenSans-Regular  pr-8 text-16-22 border rounded-md placeholder-default-grey-300 placeholder-italic focus:outline-none
    bg-white text-default-grey-400 focus:text-teal-500  focus:border-teal-500 "
                  value="92200"
                />
                <p class="OpenSans-Regular text-12 text-acheel-pink-400 mt-0.5 w-full"></p>
              </div>
            </div>
          </div>
          <div class="flex-grow">
            <div class="flex items-end w-full">
              <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-1">
                  
                  <span class="OpenSans-Regular text-12-14 text-acheel-pink-400"></span>
                </div>
                <input
                  name="address_locality"
                  type="text"
                  inputmode="text"
                  class="h-12 w-full px-4 OpenSans-Regular  pr-8 text-16-22 border rounded-md placeholder-default-grey-300 placeholder-italic focus:outline-none
    bg-white text-default-grey-400 focus:text-teal-500 border-default-grey-200 focus:border-teal-500 "
                  value="Neuilly-sur-Seine"
                />
                <p class="OpenSans-Regular text-12 text-acheel-pink-400 mt-0.5 w-full"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-end w-full">
          <div class="flex flex-col w-full">
            <div class="flex justify-between items-center mb-1">
              
              <span class="OpenSans-Regular text-12-14 text-acheel-pink-400"></span>
            </div>
            <input
              id="focus"
              name="address_complement"
              type="text"
              placeholder="Exemple : Bâtiment, Résidence, Appartement"
              inputmode="text"
              class="h-12 w-full px-4 OpenSans-Regular  pr-8 text-16-22 border rounded-md placeholder-default-grey-300 placeholder-italic focus:outline-none
    bg-white text-default-grey-400 focus:text-teal-500 border-default-grey-200 focus:border-teal-500 "
              value=""
            />
            <p class="OpenSans-Regular text-12 text-acheel-pink-400 mt-0.5 w-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplementAdresse;
