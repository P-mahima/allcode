import React, { Component } from "react";

class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            toggle: false
        }
    }

    componentDidMount() {
        console.log('Component is  Mount 👍')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component is Updating ✔', prevState)
    }

    // shouldComponentUpdate() {
    //     console.log('component should update')
    // }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
                <button onClick={() => this.setState({ count: (this.state.toggle = true) })}>Unmount</button>
                {this.state.toggle ? null : <Unmount />}

            </div>
        )
    }
}
export default LifeCycle


export class Unmount extends Component {
    componentWillUnmount() {
        alert('Component will UnMount ✌')
    }
    render() {
        return (
            <div></div>
        )
    }
}