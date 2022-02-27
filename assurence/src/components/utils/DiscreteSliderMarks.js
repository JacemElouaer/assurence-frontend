import React ,  {useState , useEffect}  from  'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { teal } from '@mui/material/colors'; 
import { grey } from '@mui/material/colors'; 




export default function DiscreteSliderMarks(props) {

 
  let [deviceWidth  ,  setDeviceWidth] = useState(window.innerWidth) 
  let [orientation , setOrientation] = useState("vertical") 
  console.log(deviceWidth)

useEffect((deviceWidth)=>{
  function handleResize()
  {
    setDeviceWidth(window.innerWidth)
    if(deviceWidth < 540){
      setOrientation("verticale")
    }
    else
    {
      setOrientation("horizontal")
  }}
  window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)}
}, [])

function Change(e){
  props.change(props.choice_map[e.target.value])

}

  return (
    <div className=" w-full   mb-8 place-items-center xs:text-center mt-10">
      {window.innerWidth < 540 ? 
      <Box  className="w-full h-200">
      <Slider
        onChange={Change}
        default_value = {props.valuesin[props.default_value]}
        value={props.valuesin[props.default_value]}
        aria-label="Restricted values"
        step={null}
        marks={props.choix}
        orientation = "vertical"
        style={{color :teal[400]  , fontSize : " 25px"}}
      />  
    </Box>:
    <Box  className="w-full h-50">
      <Slider
        onChange={Change}
        default_value = {props.valuesin[props.default_value]}
        value={props.valuesin[props.default_value]}
        aria-label="Restricted values"
        step={null}
        marks={props.choix}
        style={{color :teal[400]  , fontSize : " 25px"}}
      />  
    </Box>}
    
    </div>
  );
}