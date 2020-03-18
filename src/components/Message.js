import React, {Component} from 'react';

class Message extends Component{
        constructor(){
            super()
            this.state = {
                message: "Welcome Visitor"
            }
        }

        changeMyMessage(){
            this.state.message = "Vama Love You"
            this.setState(this.state)
        }

        
        render(){
            return (
                <div>
                    <h2> { this.state.message } </h2>
                    <button onClick = { () => this.changeMyMessage() }>Subscribe</button>    
                </div>
                )
            }
    }

export default Message;