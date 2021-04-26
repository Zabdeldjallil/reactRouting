import React from "react";
import { render } from "react-dom";
import {Redirect,useHistory,useParams,useLocation} from "react-router-dom"

export default  function About(){
    //plus la peine d'utiliser history en tant que props
    const history=useHistory()
    const {name,surname}=useParams()
    const location=useLocation()
    return<>
        {console.log(location)
            //name !="john" ? <Redirect to="/" />:null}
            //we won't have to use match:{params:{name}} to get the params passed to the link
        }
        <div>i am the about {name} et {surname} component
            <button onClick={()=>{history.push('/')}}>Go back</button>
            <button onClick={()=>history.goBack()}>Go back with a function</button>

        </div>

    </>

}
