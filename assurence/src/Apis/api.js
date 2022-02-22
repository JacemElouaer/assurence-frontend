
import axios from 'axios';
import {format_devis_maison ,  format_devis_apartement}   from './_DATA'

const basic_url = 'http://127.0.0.1:8000/'




const create_prospect_url = `${basic_url}prospect/create`;
const create_devis_maison_url = `${basic_url}devis/maison/create`
const create_devis_apartment_url = `${basic_url}devis/appartment/create`




export const save_prospect = async (prospect) => { 
    console.log(prospect)
    return  await fetch(create_prospect_url , {
        method : 'POST',
        body : JSON.stringify(prospect), 
        headers : { 'Content-Type': 'application/json'}
    }).then(response =>response.json())
        .catch(err =>console.log(err))
    }
  







export const  save_devis =   async ( id ,data_devis)=>{  
    console.log("am here !!! ")
if (data_devis.type_habitat ===  "Maison"){ 
    let  devis_maison  =  format_devis_maison(id ,data_devis ) 
    console.log(devis_maison)
    return  await fetch (create_devis_maison_url ,{
        method: 'POST',
        body: JSON.stringify(devis_maison),
        headers : { 'Content-Type': 'application/json'}
    }).then(response=>response.json())
        .catch(err=>err)
    }
if (data_devis.type_habitat ===  "Appartement"){ 
    let  devis_maison  =  format_devis_apartement(id ,data_devis ) 
    console.log(devis_maison)
    return  await fetch (create_devis_apartment_url ,{
        method: 'POST',
        body: JSON.stringify(devis_maison),
        headers : { 'Content-Type': 'application/json'}
    }).then(response=>response.json())
        .catch(err=>err)
    }
}
