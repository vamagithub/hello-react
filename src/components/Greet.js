import React from 'react'

function Greet(props){
    return (
    <div>
        <h1>My name is {props.name} a.k.a {props.quality} </h1>
        {props.children}
    </div>
    )
}


export default Greet;