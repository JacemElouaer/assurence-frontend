import React, { useState ,  useEffect } from 'react'

import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
function MultiselectDropdown(props) {
    const [value, setvalue] = useState('')


    const  handleOnchange  =  val  => {
      props.restoreAct(val)
      setvalue(val)
    }
    const  options  = props.options
  
return (
    <div className="w-full ">
    <MultiSelect
      onChange={handleOnchange}
      options={options}
      style={{width: '100%'}}
    />
  </div>
    
  )
}

export default MultiselectDropdown