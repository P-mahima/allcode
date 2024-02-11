import { Component } from "react";

class Plus extends Component{
    constructor(props){
        super(props)
        this.state= {
          val: this.props.value
        }
        console.log(this.state.val)
    }
    handleplus = () => {
        this.setState({val : this.state.val + 1})
        console.log(this.state.val)
    }
    render() {
      return (
        <div>
            <h1>Count : {this.state.val}</h1>
          <button onClick={this.handleplus}>Plus</button>
          {/* <button>minus</button> */}
        </div>
      )
    }
}
export default Plus