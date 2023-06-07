import { useState } from "react";

const  Hooks= () => {
        let [value,setValue]=useState(0)
        let increase =() =>{
            setValue(++value)
        }
        return(
    <div className="hooks">
        <h1>{value}</h1>
        <button onClick={increase} >Increase</button>
        <button onClick={()=>setValue(--value)} >Decrease</button>
        <button onClick={()=>setValue(0)}>reset</button>
    </div>
     );
}
    
export default Hooks;