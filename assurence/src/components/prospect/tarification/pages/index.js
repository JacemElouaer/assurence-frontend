import React from 'react'

import Tarifications from "../sections/tarifications" 
import Personnalise from  '../sections/personnalise' 
import Options from  '../sections/options' 
import Garanties from '../sections/garanties'
function Index() {
  return (
    <div>
    <Tarifications/>
    <Personnalise/>
    <Options/>
    <Garanties/>
    </div>
  )
}

export default Index