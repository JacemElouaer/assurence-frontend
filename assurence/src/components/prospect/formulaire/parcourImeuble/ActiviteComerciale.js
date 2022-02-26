import React  , {useState }from 'react'
import Button  from  '../../../utils/Button'
import Form_grid from './Grid_theme/Form_grid'
 function ActiviteComerciale() { 
  
let choices  = ["Hotel" ,  "Musée" ,  "Bibliotèque" ,  "Ambassade" , "Lieu de culte" ,  ""]
let  [surface , setSurface] =  useState("") 
let  [Activite , setActivite] = useState([]) 
const  changeSurface =(e)=>{
  setSurface(e.target.value) 
} 
const  onSelect = (selectedList, selectedItem)=> {
}

const onRemove = (selectedList, removedItem) => {
}
     
const  senddata = (e) =>{
  console.log("hello")
}
const onChange = (event) => {
  setActivite([...event.value]);
};
const selected = Activite.length;


  return (
    <Form_grid>
        <div class="w-full max-w-lg">
      <label for="name" class="leading-7 text-s text-gray-600 "><p>Quelles sont vos activités commerciale ou professionnel </p></label>
      <input onChange={changeSurface} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="w-full max-w-lg mt-4">
      <label for="name" class="leading-7 text-sm text-gray-600 " ><p> Verifié vos activité ne font pas partis de la liste exhaistive des activités que nous ne couvrons pas </p> </label>

    </div>
    <div class="relative mb-4">
    </div>
    <div class="relative mb-4">
      
      </div>
   
    {Activite.length !== 0  && surface !== "" ? 
          <div onClick={senddata}><Button Suivant="Immeuble/Occupation" /></div>:  
          undefined
      }
      </Form_grid>

  
  )
}

export default ActiviteComerciale