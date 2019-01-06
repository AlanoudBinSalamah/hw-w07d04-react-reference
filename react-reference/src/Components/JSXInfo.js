import React, {Component} from 'react';

class JSXInfo extends Component{
    render(){
        return(
            <div className="jsx-info">
            
            <h2>JSX Info</h2>
            <p>Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function.</p>
           <br></br>
            <h2>How it is used</h2>
            <p>The first part of a JSX tag determines the type of the React element.
               Capitalized types indicate that the JSX tag is referring to a React component. These tags get compiled into a direct reference to the named variable, so if you use the JSX <Foo /> expression, Foo must be in scope.</p>
            </div>
        )
    }
}
export default JSXInfo;