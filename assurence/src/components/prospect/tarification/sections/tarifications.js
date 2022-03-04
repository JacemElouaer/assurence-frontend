import React from 'react'
import Base_page from '../baseSection/base_page'
function Tarifications() {
  return (
    <Base_page>
      <div class="flex-col gap-1 justify-center pr-1 pl-1 ">
          <div className='text-center  mx-auto'> 
              <p className="text-4xl text-black-600 pb-2">name , voici votre devis</p>
              <p className='text-center text-gray-500'>votre adresse</p>
         </div> 
         <div className='h-6'></div>
         <div className="grid bg-teal-500 s:rounded-full w-full transition-all  duration-700 ease-in-out s:w-200 s:h-200 h-230 mx-auto relative text-center place-items-center "> 
            <div class="" >
                <div className="flex s:grid">
                    <p className="s:text-8xl text-7xl text-white s:pr-8 s:pt-2  ">10 </p>
                    <span className="text-5xl text-white s:pr-8 s:pt-2 pt-3 s:hidden block" >,52 <span className="text-6xl text-white ">$</span></span> 
                    <span className="text-6 s:absolute s:top-20 s:right-6 text-white s:text-6xl hidden s:block"  >$</span>
                    <p className="s:absolute s:text-4xl top-8 right-6 text-white hidden s:block">,52</p> 
                </div>
                <p className="text-2xl text-white">Par mois</p>
            </div>
         </div> 
         <div className="h-8"></div>
         <div class="grid s:grid-cols-2 grid-cols-1 gap-1 text-center  s:w-2/5 md:w-400 mx-auto  ">
            <p className="mt-2"> Date effet</p> 
            <div className=" flex  justify-center w-2/5  mx-auto"> 
              <input type="text" className="form-control h-10 w-24 text-center" placeholder="01/02/2021"/>
            </div>
         </div> 
         <div className="h-8"></div>
         <div className="flex justify-center  mx-auto xs:w-2/5 md:w-400 "> 
             <button className="w-full  sm:w-full md:w-3/4">continue</button>
        </div>

        <div className="w-3/5 mx-auto mt-12" style={{backgroundColor:'#444' , height:'2px' ,opacity:'0.2'}}> </div>
        
      </div> 
      </Base_page>
  )
}

export default Tarifications