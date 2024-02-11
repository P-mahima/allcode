import React, { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            change : false
        }
    }
    componentDidMount(){
        console.log('Component is Mount ✌')
    }

    componentDidUpdate(){
        console.log('Component is Update ✔')
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>Click</button>
                <button onClick={() => this.setState({count: (this.state.change = true)})}>UnMount</button>
                {this.state.change ? null : <UnMount/>}

            </div>
        )
    }
}
export default LifeCycle

export class UnMount extends Component{
    componentWillUnmount(){
        alert('Component Will UnMount👍')
    }
    render(){
        return(
            <div></div>
        )
    }
}