import React from "react";
import { Component } from "react";

class Cls_state extends Component{
    constructor(props){
        super();
        this.state={
            count: 0
        };
    }
    add=()=>{
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }


    render(){
        return(
            <div>
                <h1>using State in Class Component</h1>
                <p>count:{this.state.count}</p>
                <button onClick={this.add}>add</button>

            </div>
        )
    }
}

export default Cls_state