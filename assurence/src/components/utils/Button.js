import React from 'react';
import {Link} from  'react-router-dom'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Button(props) {
    const url_suivant =  `/${props.Suivant}`
  return (
  <div class="grid justify-items-center mt-8 mr-5">
  <Link  to={url_suivant} style={{textDecoration:'none'}}>
      <button type="button" style={{backgroundColor:'#00a898'}} class="transition     text-white font-bold py-2 px-4 rounded"> Suivant <span className=""><ArrowForwardIosIcon/></span></button>
      </Link>
      
</div>);
}

export default Button;
