import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycle from './LifeCycle';

class ComponentInfo extends Component{
render(){
    return(
        <div className="component-info">
        <h1>Component Info</h1>

        <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
        Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

       <PropsInfo/>
       <StateInfo/>
       <LifeCycle/>
        </p>
        </div>

      
            
        

    )
}
}

export default ComponentInfo;
