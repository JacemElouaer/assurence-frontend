import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function ButtonError(props) {
  return (
  <div class="grid justify-items-center mt-8 " style={{ pointerEvents:"none"}}>
      <button type="button" style={{backgroundColor:'#00a898',pointerEvents:"none"}} class="transition      text-white font-bold py-2 px-4 rounded"> Suivant <span className=""><ArrowForwardIosIcon/></span></button>
</div>);
}

export default ButtonError;
