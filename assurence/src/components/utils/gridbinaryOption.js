import React ,  {Component} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
class  GridbinaryOption extends Component {

constructor(props) {
    super(props);
    this.setState({ 

    })
}
componentDidUpdate(props){ 
  if (this.props.choix===props.id) {
    document.getElementById(props.id).style.borderColor = "#00a898";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#00a898";
    document.getElementById(`check${props.id}`).style.display = "block";
    
  } else {
    document.getElementById(props.id).style.borderColor = "#e0dfda";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#e0dfda";
    document.getElementById(`check${props.id}`).style.display = "none";
  }
}
componentDidMount(){ 
  if (this.props.choix===this.props.id) {
    document.getElementById(this.props.id).style.borderColor = "#00a898";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#00a898";
    document.getElementById(`check${this.props.id}`).style.display = "block";
  }
}
render(){


  return (
      
<div  class="flex flex-col mb-5 justify-between w-4/4 xs:w-36 md:w-60 items-center focus:outline-none relative" style={{ pointerEvents:"none"}}
  id= {this.props.id}>
      <div class="flex justify-center items-end mb-2 h-100 w-110 "  style={{ pointerEvents:"none"}}> 
          {this.props.type==="oui"?
          <div clas="bg-grey-400 text-center  mx-auto  rounded-full" id={`${this.props.id}binaryOption`} style={{border:"2px solid #e0dfda" ,  padding :'20px'  ,'borderRadius':'50%' }}  > 
            <CheckIcon style={{ fill: '#444',fontSize:'30px'}} />
          </div>:
          <div clas="bg-grey-400 text-center  mx-auto rounded-full" id={`${this.props.id}binaryOption`} style={{border:"2px solid #e0dfda" ,  padding :'20px'  ,'borderRadius':'50%' }}> 
            <CloseIcon style={{ fill: '#444' ,fontSize:'30px'}}/>
          </div>
          }
      </div>
      {this.props.type==="oui"? 
      <div class="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans mt-2 w-3/4" style={{ pointerEvents:"none"}}><p className="text-sm font-bold text-[#444] text-4 font-sans" style={{ pointerEvents:"none"}}>{this.props.option_text}</p></div>: 
       <div class="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans mt-2 w-3/4" style={{ pointerEvents:"none"}}><p className="text-sm font-bold text-[#444] text-4 font-sans" style={{ pointerEvents:"none"}}>{this.props.option_text}</p></div>
      }
  <div class="absolute top-4 right-6     w-2 h-2 rounded-full" display =  {{display: "none"}} id={`check${this.props.id}`}>

  </div>
  
  
</div>
  )
  
}
}

export default GridbinaryOption;
