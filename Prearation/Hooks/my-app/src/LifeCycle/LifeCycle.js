import React, { Component } from "react";

class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            changeCompo: false
        }
    }
    componentDidMount() {
        console.log("component Mount")
    }
    componentDidUpdate(preProps, preState) {
        console.log('component update', preState)
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
                <button onClick={() => this.setState({count: !this.state.changeCompo})}>Click</button>
                {this.state.changeCompo ? "" : <Mount />}
            </div>
        )
    }
}
export default LifeCycle


export class Mount extends Component {
    componentWillUnmount() {
         alert('component UnMount')
    }
    render() {
        return (
            <div></div>
        )
    }
}