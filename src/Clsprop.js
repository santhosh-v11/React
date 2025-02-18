import React from "react";
import { Component } from "react";


class New_prop extends Component{
    render(){
        return(
            <div>
                <h1>Prop in Class Component </h1>
                <p style={{color: "red",background:"black"}}>{this.props.Topic} Used in {this.props.component}</p>
            </div>
        )
    }
}

export default New_prop