import React from "react";
import '../css/Counter.css'
function Counter({counter}) {   
    return(
        <div className="container_counter">
            {counter}
        </div>
    );
}
export default Counter;