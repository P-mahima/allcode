import React, { Component } from "react";

class ClassChild extends Component{
    constructor(props){
        super(props)
       this.state = {
        value1 : this.props.value
       }
    }
    
    render(){
        return(
            <div>
                <h1>Count:{this.state.value1}</h1>
                <button onClick={() => this.setState({value1 : this.state.value1 + 1})}>Click</button>
            </div>
        )
    }
}
export default ClassChild