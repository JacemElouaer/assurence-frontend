import React from 'react'
import  {BrowserRouter ,  Routes , Route} from 'react-router-dom'
import NiveauImmeuble from './NiveauImmeuble'
import {Outlet} from  "react-router-dom"
function FormulaireImmeuble() {
  return (
        <div>
            <Outlet/>
        </div>    
    )
}

export default FormulaireImmeuble