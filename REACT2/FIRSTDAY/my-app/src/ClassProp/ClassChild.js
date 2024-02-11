import React, { Component } from 'react'

export default class ClassChild extends Component {
  constructor(props){
    super(props)
        console.log(props)
    
  }
  
    render() {
    return (
      <div>ClassChild
        {/* <h1>{this.state.Name}</h1> */}
        <h1>{this.props.Name}</h1>
      </div>
      
    
    )
  }
}
