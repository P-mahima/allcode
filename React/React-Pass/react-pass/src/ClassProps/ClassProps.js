import React, { Component } from "react";
import ClassChild from "./ClassChild";

class ClassProps extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <div>
               <ClassChild value ={this.state.count} />

            </div>
        )
    }
}
export default ClassProps