import React , {useState , useEffect} from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function InputTag(props) {
    const [tags, setTags] = useState([]) 
    const   changeTags=(newTags)=>{
        props.changeAct(newTags)

    }

    useEffect(() => {
      setTags(props.tags)
    })
    return (
      <ReactTagInput 
        tags={tags} 
        onChange={(newTags) =>changeTags(newTags) }
      />
    )
}

export default InputTag