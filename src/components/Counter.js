// type rce for class component


import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState( {
            count: this.state.count + 1
        }, () => {
            // callback fucntion to execute after async function completes the execution
            console.log("Callback value for count ", this.state.count)
        })
    }


    render() {
        return (
            <div>
                <h1>Count is  { this.state.count }</h1>
                <button onClick = { () => this.increment() } >
                    Count My Clicks
                </button>

            </div>
        )
    }
}

export default Counter
