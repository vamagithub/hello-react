import React from 'react';

const Hello = () => {
    return (
        // <div>
        //     <h1>Hello Vama, With JSX</h1>
        // </div>
        React.createElement('div', {id:"dummyid", className: "dummyClass"}, React.createElement('h1', null, 'Hello Vama'))
    )
}

export default Hello;