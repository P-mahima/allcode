import React, { Component } from "react";
import ClassSecond from "./ClassSecond";

class ClassFirst extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <div>
                <ClassSecond value={this.state.count} />
            </div>
        )
    }
}
export default ClassFirst