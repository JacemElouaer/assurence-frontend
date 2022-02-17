import React ,  {Component} from 'react';
import DoneIcon from "@mui/icons-material/Done";
import equal from 'fast-deep-equal'
class  GridMultipleOption extends Component {

constructor(props) {
  super(props);
  this.state = {
    
  }
}
shouldComponentUpdate(prevState , nextState) {
  console.log("workings")
  return  true;
}
componentDidUpdate() {
  console.log("updating")
    if ((this.props.choix).includes(this.props.id)) {
    document.getElementById(this.props.id).style.borderColor = "#00a898";
    document.getElementById(`check${this.props.id}`).style.display = "block";
  } else {
    document.getElementById(this.props.id).style.borderColor = "#e0dfda";
    document.getElementById(`check${this.props.id}`).style.display = "none";
    }
}
componentDidMount(){ 
   console.log(this.props.choix)
  if ((this.props.choix).includes(this.props.id)) {    
    document.getElementById(this.props.id).style.borderColor = "#00a898";
    document.getElementById(`check${this.props.id}`).style.display = "block";
  }
}

render(){
 
  return (      
<div  className="flex flex-col mb-2   text-center  justify-center w-4/4 xs:w-36 md:w-44 items-center focus:outline-none relative mx-auto" style={{ pointerEvents:"none"}}
  id= {this.props.id}>
      <div className="flex justify-center  mx-auto  items-end mb-1 h-110 w-full" style={{ pointerEvents:"none"}}>
      <img   src={this.props.src} alt="logo" className=" h-20"  style={{ pointerEvents:"none"}}/>
      </div>
      <div className="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans" 
      style={{ pointerEvents:"none"}}><p className="text-10" style={{ pointerEvents:"none"}}>{this.props.text_option}</p></div>
  <div
    className="absolute top-4 right-4    w-6 h-6 rounded-full " style =  {{display: "none" ,backgroundColor :  "#00a898"}}
     id={`check${this.props.id}`}>
    <DoneIcon   style={{ fill: '#e0dfda' }}  />
  </div>
  
</div>
  )
  
}
}

export default GridMultipleOption;
