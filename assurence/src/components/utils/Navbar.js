import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

 
function Navbar() {
  const navigate = useNavigate();
  const data   =  useSelector(state => state.FormReducer)

const  goBack =()=> {
   navigate(-1)
} 
  return (
    <div class= " flex text-gray-600  w-full  h-16 nav-box m-0">
    <div class = "flex-none  p-2  m-1" onClick={goBack}>
      <button class="retour-btn bg-gray-100 border-0 hover:bg-gray-200 rounded-full text-base  md:mt-0">
        <div class="">
      <ArrowBackIcon/>
      </div> 
    </button>
    </div>
    
<div class="w-full  rounded-full h-1.5 dark:bg-gray-700 absolute top-16">
<div class="bg-teal-500 h-1  " style={{width: `${data.progress}%`}}></div>
</div>

</div>
  )
}

export default Navbar