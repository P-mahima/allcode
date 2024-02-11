import React, { Component } from "react";
import Plus from "./Plus";
class StateCompo extends Component{
    constructor(){
        super();
        
        this.state = {
            count : 0
        }
    }

    render(){
        return(
           <div>
          <Plus value= {this.state.count}/>
           </div>
          
        )
    }
}
export default StateCompo;

//parent compo