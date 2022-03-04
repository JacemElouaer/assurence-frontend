import React from 'react'
import valeur  from  '../../../../assets/image_tarification/valeur.png'
import SwitchBtn from  '../../../utils/switchBtn'
import premium  from  '../../../../assets/image_tarification/premium.png'
import terror  from  '../../../../assets/image_tarification/terror.png'
import glass  from  '../../../../assets/image_tarification/glass.png'
import earth  from  '../../../../assets/image_tarification/earth.png'
import judge  from  '../../../../assets/image_tarification/judge.png'
import eau  from  '../../../../assets/image_tarification/eau.png'
import pluis  from  '../../../../assets/image_tarification/pluis.png'
import traiding  from  '../../../../assets/image_tarification/traiding.png'
import fire  from  '../../../../assets/image_tarification/fire.png'
import responsable  from  '../../../../assets/image_tarification/responsable.png'
let list_garanties = [
    {"image" : premium ,  
    "titre" :"Assistance premium"   ,  "text" :"Accompagnement tout au long d'un sinistre suite à un accident à votre domicile  ou à  un problème de la vie quotidienne . (ex :  Hebergement temporaire , transport à l'hopital ...)"  ,  
},
 {"image" :terror  ,  
    "titre" :"Attentats et actes de terrorisme"   ,  "text" :"Protection  de vos biens contre toute catastrophe reconnues par l'Etat comme attentat ou act de terrorisme."  ,  
},

 {"image" :  glass,  
    "titre" :"Brise de glace"   ,  "text" :"Protection des surfaces vitrées de votre habitation .Cela permet d'etre indemnisé en cas de casse accidentelle .(ex:  un tombe sur votre baie vitrée) ."  ,  
},

 {"image" :  earth,  
    "titre" :  "Catastrophe naturelles" ,  "text" :"Indemnisation de vos bien endommagés dans le cas d 'un événement climatique inhabituel et de grande ampleur. s'il est reconnue par l'état comme étant une catastrophe naturelle ."  ,  
},

 {"image" : judge ,  
    "titre" :  "Défence pénales et recour" ,  "text" :"Dans le cas d’un accident couvert par votre contrat, la défense pénale et recours peut prendre en charge les frais liés à la défense de vos intérêts (ex: frais d'avocat)."  ,  
},

 {"image" : eau ,  
    "titre" :  "Dégâts des eaux" ,  "text" :"Nous vous indemnisons en cas de dommages matériels suite aux conséquences d’un dégât des eaux (ex: une fuite, une infiltration ou un débordement.)"  ,  
},

 {"image" : pluis ,  
    "titre" : "Evènements climatiques"  ,  "text" :"Couvre les dommages non inclus dans la garantie catastrophe naturelle. S’applique aux tempêtes, ouragans, cyclones ainsi que les dégâts causés par la grêle sur votre toiture"  ,  
},

 {"image" : traiding ,  
    "titre" :"Frais et pertes"   ,  "text" :"Prise en charge de certains frais annexes que vous seriez obligés d’engager à la suite d’un sinistre garanti (ex: frais de démolition et de déblaiement)."  ,  
},

 {"image" :  fire,  
    "titre" : "Incendie"  ,  "text" :"Vos biens mobiliers sont couverts en cas d’incendies, d’explosion ou des dommages liés à la foudre."  ,  
},
{"image" : responsable ,  
    "titre" :"Responsabilité civile"   ,  "text" :"Vous et les personnes déclarées au contrat êtes protégés en cas de dommages causés à un tiers. (ex: vous cassez accidentellement la vitre de votre voisin)."  ,  
},


]

function Garanties() {
   


  return (
    <section class="mx-auto   text-gray-600 body-font lg:w-1100 w-full   ">
    <div class="p-2 mx-auto text-center">
        <h2 class=" title-font text-3xl title-font font-medium text-[#444] mb-1"> <span className="text-teal-600">les Garanties</span> comprises dans l'offre</h2>
        <p class=" text-xl  font-medium text-gray-500 ">L'offre Premium comprend l'ensemble des garanties proposées par l'assurence pour protéger  <span className="text-teal-600">votre habitation</span> </p>
    </div> 
    <div class="h-8"> </div>
    <div class="mx-auto justify-center place-items-center">


  <div class="flex flex-wrap  justify-center  ">

 { list_garanties.map((garantie)=>
    <div class="p-4 md:w-2/4 lg:w-1/3  w-5/6">
        <div class="h-full  bg-opacity-75 px-8 pt-8 pb-4 rounded-lg overflow-hidden relative ">
        <img class="  w-100   mx-auto"   src={garantie.image} alt="helo" />
            <div class="pt-6 md:p-8  ">
                <div class="">
                <h1 class="text-2xl title-font font-medium text-teal-600 mb-1 ">{garantie.titre}</h1>
                <p class="mb-3  text-gray-500 float-left ">
                    {garantie.text}
                </p>
                </div>                   
            </div> 
        </div>  
    </div> 
    )}
      
    </div>

    </div> 
   
    </section>
  )
}

export default Garanties