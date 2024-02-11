import React, { Component } from "react";
import ClassChild from "./ClassChild";

class ClassParent extends Component{
    constructor(){
        super()
        this.state={
            value : 0
        }
    }

    render(){
        return(
            <div>
                <ClassChild valueOne = {this.state.value}/>
            </div>
        )
    }
}
export default ClassParent