import React, { Component } from "react";
import ClassChild from "./ClassChild";

class ClassPrent extends Component{
    constructor(){
        super()
            this.state = {
                value : 0
            }
    
    }
    render(){
        return(
            <div>
                <ClassChild count ={this.state.count}/>
            </div>
        )
    }
}
export default ClassPrent