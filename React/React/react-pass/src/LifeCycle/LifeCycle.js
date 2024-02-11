import React, { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            changeCompo : false
        }
    }
    componentDidMount(){
        console.log('component Mount in dom')
    }
    componentDidUpdate(preProp, preState){
        console.log('Update componrnt' , preState)
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>this.setState({count: this.state.count + 1})}>Click</button>
                <br></br>
                <button onClick={() => this.setState({changeCompo : true})}>Mount</button>
                {this.state.changeCompo ? null : <Unmount/>}
            </div>
        )
    }
}
export default LifeCycle


export class Unmount extends Component{
    componentWillUnmount(){
        alert('Component unmount')
    }
    render(){
        return(
            <div></div>
        )
    }
}
