import React from "react";
import { render } from "react-dom";
import {useHistory} from "react-router-dom";

export default  function Home(){
    //pas la peine de passer history comme props maintenant
    const history=useHistory()
    return <div>i am the home component
        <button onClick={()=>{history.goForward()}}>go forward</button>

    </div>
}
