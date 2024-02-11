import React, { Component } from "react";
import ClassChild from "./ClassChild";

class ClassParent extends Component {
    constructor(){
        super()
        this.state = {
            Batch: 'EA23'
        }
    }
    render(){
        return(
            <div>
                <ClassChild name = 'Mahima'/>
                <ClassChild value={this.state}/>
            </div>
        )
    }
}
export default ClassParent;