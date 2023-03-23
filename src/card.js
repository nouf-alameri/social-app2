import React, {useState} from "react";

function Card (props){
    const [num, setNum] = useState(0); 

    return(
    <div>
        <img src={props.img}  style={{width : "300 px", height:"300px"}}/>
        <p>{props.t}</p>
        <button onClick={()=>props.likes(props.t)}>Like</button>  <p>{props.res}</p>
    </div>
)

}

export default Card; 
