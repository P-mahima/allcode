import React, { Component } from "react";

class LifeCycle extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            toggle : false
        }
    }
    componentDidMount(){
        console.log('Component is Mount')
    }
    componentDidUpdate(){
        console.log('Component is update')
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=> this.setState({count: this.state.count  + 1})}>Click</button>
                <button onClick={() => this.setState({count:(this.state.toggle = true)}) }>Unmount</button>
                {this.state.toggle ? null : <Unmount/>}
            </div>
        )
    }
}

export default LifeCycle

export class Unmount extends Component{
    componentWillUnmount(){
        alert('Component will Unmount..')
    }
    render(){
        return(
            <div></div>
        )
    }
}



























// import React, { Component } from "react";

// class Lifecycle extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count : 0,
//             toggle : false
//         }
//     }
//     componentDidMount(){
//         console.log('component is Mount ✌')
//     }

//     componentDidUpdate(preProps, preState){
//         console.log('Component is Update ✔', preState)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={()=> this.setState({count : this.state.count + 1})}>Click</button>
//                 <button onClick={()=> this.setState({count : (this.state.toggle = true)})}>Unmount</button>
//                 {this.state.toggle ? null : <LifeCycle/>}
//             </div>
//         )
//     }
// }
// export default Lifecycle

// export class LifeCycle extends Component{
//     componentWillUnmount(){
//         alert('Component will unmount 👍')
//     }
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }






























// import React, { Component } from 'react'

// class Lifecycle extends Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0,
//             toggle : false
//         }
//     }
//     componentDidMount(){
//         console.log('Component is Mount ✌')
//     }
//     componentDidUpdate(){
//         console.log('component is Updated ✔')
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={()=> this.setState({count: this.state.count + 1})}>Click</button>
//                 <button onClick={() => this.setState({count: (this.state.toggle = true)})}>Unmount</button>
//                 {this.state.toggle ? null : <Unmount/>}
//             </div>
//         )
//     }
// }
// export default Lifecycle

// export class Unmount extends Component{
//     componentWillUnmount(){
//         alert('Component will unmount👍')
//     }
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }
