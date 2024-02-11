import React, { Component } from 'react'
import ClassChild from './ClassChild'

export default class ClassParent extends Component {
    constructor(){
        super()

        this.state ={
            Name :'EA23'
        }
    }
  render() {
    return (
      <div>ClassParent

          <ClassChild Name='EA23'/>
          <ClassChild value ={this.state} />
      </div>
    )
  }
}
