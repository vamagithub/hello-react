import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import  Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">

        <Message></Message> 


        {/* <Greet name="Batman" quality="save me Vama"/>

        <Greet name="Vama" quality="amazing">
          This is a children data <br/>
          <button>Save The World</button>
        </Greet>


        <Welcome quality="easy"></Welcome>
        <Welcome quality="beautiful">Love React</Welcome> */}

        {/* <Hello/> */}

    </div>
  );
}

export default App;
