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
                <h2>Count:{this.state.value1}</h2>
                <button onClick={() => this.setState({value1 : this.state.value1 + 1})}>INC</button>

                <button onClick={() => this.setState({value1 : this.state.value1 - 1})}>DEC</button>
            </div>
        )
    }
}
export default ClassChild

