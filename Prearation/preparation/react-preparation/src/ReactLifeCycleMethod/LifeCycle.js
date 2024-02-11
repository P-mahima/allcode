import React, { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super()
        this.state = {
            value : 0,
            count : true
        }
        
        console.log('this is constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(prevProps , preState){
        console.log('componentDidUpdate')
    }
   
   



    render(){
        console.log('This is Render Call')
        return(
            <div>
                <h1>{this.state.value}</h1>
                <h3>{this.state.delete ? <Unmount/> : ''}</h3>
                <button onClick={()=> this.setState({value: this.state.value + 1})}>click</button>
                <button onClick={()=> this.setState({delete :!this.state.Unmount})}>UnmountT</button>
                {/* {this.state.delete && 'Unmount' } */}
            </div>
        )
    }
}
export default LifeCycle

export class Unmount extends Component{
    componentWillUnmount(){
        console.log('Unmount')
    }
    render(){
        return(
            <div>
                <h1>This is a Compo didUnmount</h1>
            </div>
        )
    }
}