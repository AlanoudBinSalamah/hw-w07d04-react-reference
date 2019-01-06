import React, {Component} from 'react';

class LifeCycle extends Component{
    render(){
        return(
            <div className ="life-cycle">

            <h1>Life Cycle</h1>
            <ul>
                <li>constructor()</li>
                <li>static getDerivedStateFromProps()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
                <li>static getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
                <li>componentWillUnmount()</li>
                <li>static getDerivedStateFromError()</li>
                <li>componentDidCatch()</li>

            </ul>
            
            </div>

        )
    }
}

export default LifeCycle;



