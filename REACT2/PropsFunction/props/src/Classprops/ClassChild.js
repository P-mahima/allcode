import React, { Component } from "react";

class ClassChild extends Component{
constructor(props){
    super(props)
    console.log(props)
}
render(){
    return(
        <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props}</h1>
        </div>
    )
}

}
export default ClassChild