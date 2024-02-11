import React, { Component } from "react";

class ClassSecond extends Component{
    constructor(props){
        super(props)
        this.state = {
            val : this.props.value
        }
    }
    HandlePlus = () => {
        this.setState({val : this.state.val + 1}) 
    }
    render(){
        return(
            <div>
                <h1>{ this.state.val}</h1>
                <button onClick={this.HandlePlus} >Click</button>
            </div>
        )
    }
}
export default ClassSecond