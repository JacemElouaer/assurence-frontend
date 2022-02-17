import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { teal } from '@mui/material/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



export default function DiscreteSliderMarks(props) {
  const marks = props.choix

console.log(props.default_value)
let  choix = {
  0 : "Aucun",  
  33 :  "Un", 
  66 :  "Deux", 
  100 :  "Trois ou plus"
}
let  valuesin = {
  "Aucun": 0,  
  "Un" : 33 , 
  "Deux" : 66  , 
  "Trois ou plus" :  1000
}
function Change(e){
  props.change(choix[e.target.value])
}

  return (
    <Box  className="w-full">
      <Slider
        onChange={Change}
        defaultValue = {valuesin[props.default_value]}
        aria-label="Restricted values"
        step={null}
        marks={marks}
        style={{color :teal[200]  , width  :  '500px'  ,  fontSize : " 25px"}}
      />
    </Box>
  );
}