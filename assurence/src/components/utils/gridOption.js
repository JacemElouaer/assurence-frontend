import React, { Component } from "react";
import DoneIcon from "@mui/icons-material/Done";
class GridOption extends Component {
  
  componentDidUpdate(props) {
    if (this.props.choix === props.id) {
      document.getElementById(props.id).style.borderColor = "#00a898";
      document.getElementById(`check${props.id}`).style.display = "block";
    } else {
      document.getElementById(props.id).style.borderColor = "#e0dfda";
      document.getElementById(`check${props.id}`).style.display = "none";
    }
  }
  componentDidMount() {
    if (this.props.choix === this.props.id) {
      document.getElementById(this.props.id).style.borderColor = "#00a898";
      document.getElementById(`check${this.props.id}`).style.display = "block";
    }
  }
  render() {
    let sizes = "" 
    if (this.props.src) {
       sizes = "xs:w-44 xs:w-44"}
       else {
       sizes = "h-22 xs:w-44 "}
    
    return (
      <div
        className={`flex flex-col mb-2   text-center  justify-center w-4/4   items-center focus:outline-none  mx-auto relative ${sizes} relative `}
        style={{ pointerEvents: "none" }}
        id={this.props.id}>
        {this.props.src ? (
          <div
            className="flex justify-center  mx-auto  items-end mb-1 h-110 w-full "
            style={{ pointerEvents: "none" }} >
            {this.props.id === this.props.choix ? (
              <img
                src={this.props.src_c}
                alt="logo"
                className="h-100"
                style={{ pointerEvents: "none", opacity: "0.2" }}/>
            ) : (
              <img
                src={this.props.src}
                alt="logo"
                className="h-100"
                style={{ pointerEvents: "none" }}/>
            )}
          </div>
        ) : undefined}
        <div
          className="flex flex-col flex-wrap text-center max-w-full items-center justify-center mb-0.5  text-16 text-default-grey-400 font-sans w-40 h-12"
          style={{ pointerEvents: "none" }}>
          <p
            className="text-sm  font-bold text-[#444] text-4 option-text"
            style={{ pointerEvents: "none" }}>
            {this.props.text_option}
          </p>
        </div>
        {this.props.src ? (
          <div
            className="absolute top-40 right-center     w-6 h-6 rounded-full mt-1"
            style={{ display: "none", backgroundColor: "#00a898" }}
            id={`check${this.props.id}`}>
            <DoneIcon style={{ fill: "#e0dfda" }} />
          </div>
        ) : (
          <div
            className="absolute top-12 right-center    w-6 h-6 rounded-full "
            style={{ display: "none", backgroundColor: "#00a898" }}
            id={`check${this.props.id}`}>
            <DoneIcon style={{ fill: "#e0dfda" }} />
          </div>
        )}
      </div>
    );
  }
}

export default GridOption;
