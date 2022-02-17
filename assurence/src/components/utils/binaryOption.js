import React ,  {Component} from 'react';
import CheckIcon from '@mui/icons-material/Check';
class  BinaryOption extends Component {

constructor(props) {
    super(props);
    this.setState({ 

    })
}
componentDidUpdate(props){ 
  if (this.props.choix===props.id) {
    document.getElementById(props.id).style.borderColor = "#00a898";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#00a898";
    document.getElementById(`${this.props.id}binaryOption`).style.Color = "#00a898";
   
    
  } else {
    document.getElementById(props.id).style.borderColor = "#e0dfda";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#e0dfda";
  
  }
}
componentDidMount(){ 
  if (this.props.choix===this.props.id) {
    document.getElementById(this.props.id).style.borderColor = "#00a898";
    document.getElementById(`${this.props.id}binaryOption`).style.borderColor = "#00a898";
    
  }
}
render(){


  return (
      
<div  class="flex flex-col mb-5 justify-between w-4/4 xs:w-36 md:w-60 items-center focus:outline-none relative" style={{ pointerEvents:"none"}}
  id= {this.props.id}>
      <div class="flex justify-center items-end mb-5 h-100 w-110 "  style={{ pointerEvents:"none"}}> 
      
      {this.props.type==="oui"? 
      <div class="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans" style={{ pointerEvents:"none"}}><p class="text-10" style={{ pointerEvents:"none"}}>{this.props.option_text}</p></div>: 
       <div class="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans" style={{ pointerEvents:"none"}}><p class="text-10" style={{ pointerEvents:"none"}}>{this.props.option_text}</p></div>
      }
      
      <br/>
          {this.props.type==="oui"?
          <div clas="bg-grey-400 text-center  mx-auto  rounded-full" id={`${this.props.id}binaryOption`} style={{border:"2px solid #e0dfda" ,  padding :'5px'  ,'borderRadius':'50%' }}  > 
            <CheckIcon style={{ fill: '#444',fontSize:'20px'}}/> </div>:
          <div clas="bg-grey-400 text-center  mx-auto rounded-full" id={`${this.props.id}binaryOption`} style={{border:"2px solid #e0dfda" ,  padding :'5px'  ,'borderRadius':'50%' }}> 
            <CheckIcon style={{ fill: '#444' ,fontSize:'20px'}}/>
          </div>
          }
      </div>
      
  
  
  
</div>
  )
  
}
}

export default BinaryOption;
