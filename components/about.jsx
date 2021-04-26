import React from "react";
import { render } from "react-dom";
import {Redirect} from "react-router-dom"

export default  function About({match:{params:{name}},match:{params:{surname}},history}){
    return<>
        {name !="john" ? <Redirect to="/" />:null}
        <div>i am the about {name} et {surname} component
            <button onClick={()=>{history.push('/')}}>Go back</button>
            <button onClick={()=>history.goBack()}>Go back with a function</button>

        </div>

    </>

}
