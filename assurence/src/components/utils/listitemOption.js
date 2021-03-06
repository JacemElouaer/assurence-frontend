import React ,  {Component} from 'react';
import DoneIcon from "@mui/icons-material/Done";
class  ListitemOption extends Component {



  componentDidUpdate(props){ 
    if (this.props.choix===props.id) {
      document.getElementById(props.id).style.borderColor = "#00a898";
      document.getElementById(`check${props.id}`).style.display = "block";
      document.getElementById(`check${this.props.id}`).style.backgroundColor = "#00a898";
    } else {
      document.getElementById(props.id).style.borderColor = "#e0dfda";
      document.getElementById(`check${this.props.id}`).style.backgroundColor = "#fff";
    }
  }
  componentDidMount(){ 
    if (this.props.choix===this.props.id) {
      document.getElementById(this.props.id).style.borderColor = "#00a898";
      document.getElementById(`check${this.props.id}`).style.display = "block";
      document.getElementById(`check${this.props.id}`).style.backgroundColor = "#00a898";
    }
  }
render(){
    return (      
  <div  className="flex  h-full md:h-10 p-2 pt-2 gap-1  focus:outline-none       " style={{ pointerEvents:"none" }} id= {this.props.id}>
      
      <div className="flex-none w-6 h-6  rounded-full" style =  {{display: "block" ,backgroundColor :  "#fff"}}
      id={`check${this.props.id}`}><DoneIcon   style={{ fill: '#fff' }}  /> </div>

      <div className="flex-initial   mr-2   pb-1 text-16 text-default-grey-400 font-sans" 
        style={{ pointerEvents:"none"}}><p className="text-4" style={{ pointerEvents:"none"}}>{this.props.text_option}</p></div>
    
      
  </div>
    )
    
  }
}

export default ListitemOption;
