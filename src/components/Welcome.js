import React, { Component } from 'react';

class Welcome extends Component {
    render(){
    return (
    <div>
        <h4>React is {this.props.quality}</h4>
        <p>{this.props.children}</p>
    </div> )
    }
}

export default Welcome;
