import React, { Component } from "react";

class LifecycleCompo extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            changeCompo : false
        }
    }

    componentDidMount(){
        console.log('component mount sucessfully ✌')
    }

    componentDidUpdate(preProp, preState){
        console.log('component getting update ✔' , preState)
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={() => this.setState({count:this.state.count + 1})}>Click</button>
                <button onClick={() => this.setState({changeCompo : true})}>Mount</button>
                {this.state.changeCompo ? null : <Unmount/>}

            
            </div>
        )
    }
}


 class Unmount extends Component{
    componentWillUnmount(){
        alert('Component unmount 👍')
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default LifecycleCompo

