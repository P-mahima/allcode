import React, { Component } from 'react'

class Classcomp extends Component {
    // constructor(){
    //     super(){

    //     }
    // }
    //Mounting Phase
    componentDidMount(){
        console.log("Hello I am Mounted")
    }
    //Update Phase
    componentDidUpdate(){
        console.log("Upadting")
    }
    componentWillUnmount(){
        console.log("I am Unmounted from dom")
    }
    render() {
        let count = 0;
        return (
            <div>
                <h1> Class Component </h1>
                <button onClick={()=>{
                    console.log(count++)
                   }}>Click</button>

            </div>
        )
    }
}
export default Classcomp;