import React, {useState} from "react";

function Card (props){
    const [num, setNum] = useState(0); 
    const lik = (q) => {
       setNum(num+1); 
    }
    return(
    <div>
        <img src={props.img}  style={{width : "300 px", height:"300px"}}/>
        <p>{props.t}</p>
        <button onClick={()=>{props.likes();lik()}}>Like</button>  <p>{num}</p>
    </div>
)

}

export default Card; 
