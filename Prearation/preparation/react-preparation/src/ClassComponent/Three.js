import React,{Component} from 'react'
import First from './First'

class Three extends Component{
    constructor(){
        super()
        this.state = {
            value : 0
        }
    }
    render(){
        return(
            <div>
                <First count = {this.state.value}/>
            </div>
        )
    }
}
export default Three