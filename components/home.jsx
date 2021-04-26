import React from "react";
import { render } from "react-dom";

export default  function Home({history}){
    return <div>i am the home component
        <button onClick={()=>{history.goForward()}}>go forward</button>

    </div>
}
