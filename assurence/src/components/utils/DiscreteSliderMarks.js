import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { teal } from '@mui/material/colors';



export default function DiscreteSliderMarks(props) {



function Change(e){
  props.change(props.choice_map[e.target.value])

}

  return (
    <Box  className="w-full">
      <Slider
        onChange={Change}
        default_value = {props.valuesin[props.default_value]}
        value={props.valuesin[props.default_value]}
        aria-label="Restricted values"
        step={null}
        marks={props.choix}
        style={{color :teal[200]  , width  :  '500px'  ,  fontSize : " 25px"}}
      />
    </Box>
  );
}