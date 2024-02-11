import React, { Component } from "react";

class ClassChild extends Component{
    constructor(props){
        super(props)
        this.state={
            valueTwo : this.props.valueOne
        }
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.valueTwo}</h1>
                <button onClick={()=> this.setState({valueTwo : this.state.valueTwo + 1})}>Click</button>
            </div>
        )
    }
}
export default ClassChild