import React from 'react'

import couple  from  '../../../../assets/image_tarification/couple.png'
import enfants  from  '../../../../assets/image_tarification/enfants.png'
import franchise  from  '../../../../assets/image_tarification/franchise.png'
import friends  from  '../../../../assets/image_tarification/friends.png'
import furniture  from  '../../../../assets/image_tarification/funiture.png'
import valeur  from  '../../../../assets/image_tarification/valeur.png'

function Personnalise() {
  return (
    <section class="mx-auto   text-gray-600 body-font h-auto"> 
    <div class="h-16"> </div>
        <div class="p-2 mx-auto text-center">
            <h2 class=" title-font text-3xl title-font font-medium text-[#444] mb-1"><span class="text-teal-500">Je personnalise </span>mon assurance</h2>
            <p class=" text-xl  font-medium text-gray-500 ">vous pouver personnaliser votre offre en ajustant vos garanties</p>
            </div>
        <div class="container  mx-auto justify-center place-items-center">


        <div class="grid  sm:grid-cols-2  lg:grid-cols-3 grid-cols-1   gap-1 sm:gap-4 -m-4 justify-center text-center p-2 ">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div class="p-2 place-items-center">
                    <img src={furniture} alt="furniture" class="w-150  md:w-200 mx-auto"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">valeurs de vos biens</h1>
                    <p class=" mb-3  text-gray-500">A combien estimez-vous la valeur totale de vos biens mobiliers (meubles, vêtements, électroménager, etc.)</p>
                    <div class="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div class="p-2  place-items-center">
                    <img class="w-150 md:w-200 mx-auto" src={valeur} alt="valeur"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">Vos objets de valeur</h1>
                    <p class=" mb-3  text-gray-500">A combien estimez-vous la valeur totale de vos objets de valeur (bijoux, ordinateur, appareil photos, maroquineries de luxe instruments de musique , etc)) mobiliers (meubles, vêtements, électroménager, etc.</p>
                    <div class="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div class="p-2 h-400 place-items-center">
                    <img class="w-150 md:w-200 mx-auto" src={franchise} alt="franchise"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">Franchise</h1>
                    <p class=" mb-3  text-gray-500">Il s'agit de la somme d'argent restant à votre charge après un sinistre. Elle sera déduite des remboursements que vous pourriez recevoir. </p>
                    <div class="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-8"></div>  
            <hr className="md:hidden block"></hr>
         <div class="h-8"></div>   
            <div class="p-2 mx-auto text-center">
                <h2 class=" title-font text-3xl title-font font-medium text-[#444] mb-1">J'ajoute gratuiment <span class="text-teal-500">des bénéficiaires'</span></h2>
                <p class=" text-xl  font-medium text-gray-500 ">Vous pouvez ajouter gratuitement des bénéficiares à votre contrat habitation.</p>
            </div>
        <div class="h-8"></div>  
        <hr className="md:hidden block bg-slate-200 h-0.5"></hr>

        <div class="grid  sm:grid-cols-2  md:grid-cols-3 grid-cols-1   md:gap-4 gap-16 sm:gap-1 -m-4 justify-center text-center p-2 mt-5 md:h-250 h-full  md:mb-2 mb-8 ">
            <div class=" h-full  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div class="p-2">
                    <img class="w-100 mx-auto" src={couple} alt="couple"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">Mon conjoint</h1>
                    <div class="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
            <div class=" h-full  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="p-2">
                    <img class="w-100 mx-auto" src={enfants} alt="enfants"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">Vos enfants</h1>
                    <div class="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="p-2">
                    <img class="w-100 mx-auto" src={friends} alt="friends"/>
                    <h1 class="text-2xl title-font font-medium text-teal-600 mb-1">Vos proches ou colocataire</h1>
                   
                </div>
            </div>
            </div>
            
        
        </div>
        
        <div className="w-3/5 mx-auto mb-4" style={{backgroundColor:'#444' , height:'2px' ,opacity:'0.2'}}> </div>
    </section>
  )
}

export default Personnalise