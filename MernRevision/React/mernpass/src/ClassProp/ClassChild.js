import React, { Component } from "react";

class ClassChild extends Component{
    constructor(props){
        super(props)
            this.state = {
                valueone : this.state.count
            }
        
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.valueone}</h1>
                <button onClick={() => this.setState({valueone: this.state.valueone + 1})}>Click</button>
            </div>
        )
    }
}
export default ClassChild