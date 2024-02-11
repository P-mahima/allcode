import React,{Component} from 'react'

class First extends Component{
    constructor(props){
        super(props)
        this.state={
            Count : this.props.count
        }
    }
    HandleClick = () => {
        this.setState({Count : this.state.Count + 1})
    }
    render(){
        return(
            <div>
                <h1>Count:{this.props.Count}</h1>
                <button onClick={this.HandleClick}>Click</button>
            </div>
        )
    }
}
export default First