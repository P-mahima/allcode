import React, { Component } from "react";

class ClassChild extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : this.props.value
        }
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.data}</h1>
                <button onClick={()=> this.setState({data :this.state.data + 1})}>Click</button>
            </div>
        )
    }
}
export default ClassChild