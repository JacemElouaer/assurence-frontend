import React from 'react'
import valeur  from  '../../../../assets/image_tarification/valeur.png'
import SwitchBtn from  '../../../utils/switchBtn'
import study  from  '../../../../assets/image_tarification/study.png'
import canapet  from  '../../../../assets/image_tarification/canapet.png'
import electric  from  '../../../../assets/image_tarification/electric.png'
function Options() {
  return (
    <section class="mx-auto   text-gray-600 body-font lg:w-1100 w-full   ">
    <div class="p-2 mx-auto text-center">
        <h2 class=" title-font text-3xl title-font font-medium text-[#444] mb-1"> <span className="text-teal-600">Je personnalise </span>mes options</h2>
        <p class=" text-xl  font-medium text-gray-500 ">vous pouver personnaliser votre assurance en souscrivant à <span className="text-teal-600">des options</span> </p>
    </div> 
    <div class="h-8"> </div>
    <div class="mx-auto justify-center place-items-center">


  <div class="flex flex-wrap  justify-center  ">

      <div class="p-4 md:w-2/4 lg:w-1/3  w-5/6">
        <div class="h-full  bg-opacity-75 px-8 pt-8 pb-4 rounded-lg overflow-hidden relative ">
        <img class="  w-100   mx-auto"   src={study} alt="helo" />
            <div class="pt-6 md:p-8  ">
                <div class="">
                <h1 class="text-2xl title-font font-medium text-teal-600 mb-1 ">valeurs de vos biens</h1>
                <p class="mb-3  text-gray-500 float-left ">
                A combien estimez-vous la valeur totale de vos biens mobiliers (meubles, vêtements, électroménager, etc.)
                </p>
                </div>                
            </div>
            <div class="flex justify-center h-16 mt-4 w-full  "> 
                <div class="w-full grid gap-1 grid-cols-2 place-items-center justify-center" >
                    <p class="text-2xl text-gray-700"> 0.15$<span class="text-lg text-gray-500" style={{marginTop : "-8px"}}>/mois</span></p>
                    <SwitchBtn />
                </div>   
            </div> 
        </div>
      </div>
      <div class="p-4 md:w-2/4 lg:w-1/3  w-5/6">
        <div class="h-full  bg-opacity-75 px-8 pt-8 pb-4 rounded-lg overflow-hidden relative ">
        <img class="  w-100   mx-auto"   src={canapet} alt="helo" />
            <div class="pt-6 md:p-8  ">
                <div class="">
                <h1 class="text-2xl title-font font-medium text-teal-600 mb-1 ">valeurs de vos biens</h1>
                <p class="mb-3  text-gray-500 float-left ">
                A combien estimez-vous la valeur totale de vos biens mobiliers (meubles, vêtements, électroménager, etc.)
                </p>
                </div>                
            </div>
            <div class="flex justify-center h-16 mt-4 w-full  "> 
                <div class="w-full grid gap-1 grid-cols-2 place-items-center justify-center" >
                    <p class="text-2xl text-gray-700"> 0.15$<span class="text-lg text-gray-500" style={{marginTop : "-8px"}}>/mois</span></p>
                    <SwitchBtn />
                </div>   
            </div> 
        </div>
      </div>
      <div class="p-4 md:w-2/4 lg:w-1/3  w-5/6 h-auto ">
        <div class="h-full  bg-opacity-75 px-8 pt-8 pb-4 rounded-lg overflow-hidden  relative ">
        <img class="  w-100   mx-auto"   src={electric} alt="helo" />
            <div class="pt-6 md:p-8  ">
                <div class="">
                <h1 class="text-2xl title-font  text-teal-600 mb-1 ">valeurs de vos biens</h1>
                <p class="mb-3  text-gray-500 float-left ">
                A combien estimez-vous la valeur totale de vos biens mobiliers (meubles, vêtements, électroménager, etc.)
                </p>
                </div>                
            </div>
            <div class="flex justify-center h-16 mt-4 w-full  "> 
                <div class="w-full grid gap-1 grid-cols-2 place-items-center justify-center " >
                    <p class="text-2xl text-gray-700"> 0.15$<span class="text-lg text-gray-500" style={{marginTop : "-8px"}}>/mois</span></p>
                    <SwitchBtn />
                </div>   
            </div> 
        </div>
      </div>
    </div>

    </div> 
    <div className="w-3/5 mx-auto mb-8 mt-8" style={{backgroundColor:'#444' , height:'2px' ,opacity:'0.2'}}> </div>

    </section>
  )
}

export default Options